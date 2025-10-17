'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SignOutButton, useUser } from '@clerk/nextjs';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PremiumNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const pathname = usePathname();
  const { isSignedIn, isLoaded, user } = useUser();

  const navLinks = useMemo(
    () => [
      { href: '/', label: 'Home' },
      { href: '/find-mentor', label: 'Find Mentors' },
      { href: '/ai-assessment', label: 'AI Assessment' },
      { href: '/profile-building', label: 'Profile' },
    ],
    []
  );

  const userInitials = useMemo(() => {
    if (!isSignedIn || !user?.unsafeMetadata?.name) return '??';
    return (user.unsafeMetadata.name as string)
      .split(' ')
      .slice(0, 2)
      .map((word: string) => word.charAt(0).toUpperCase())
      .join('')
      .slice(0, 2);
  }, [isSignedIn, user?.unsafeMetadata?.name]);

  // ✅ FIXED useEffect - SEPARATE scroll logic
  useEffect(() => {
    setIsMenuOpen(false);
    setIsProfileDropdownOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = useCallback(() => setIsMenuOpen(prev => !prev), []);
  const toggleProfileDropdown = useCallback(() => setIsProfileDropdownOpen(prev => !prev), []);
  const closeAllMenus = useCallback(() => {
    setIsMenuOpen(false);
    setIsProfileDropdownOpen(false);
  }, []);

  if (!isLoaded) {
    return <NavigationSkeleton />;
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[9999] bg-white backdrop-blur-lg border-b border-gray-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center">
              <img src="/logoo.png" className="h-14" alt="Logo" />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                    pathname === link.href
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50/70'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop Profile/Auth */}
            <div className="hidden md:flex items-center space-x-4">
              {isSignedIn ? (
                <ProfileButton
                  userInitials={userInitials}
                  isOpen={isProfileDropdownOpen}
                  onToggle={toggleProfileDropdown}
                  onClose={closeAllMenus}
                />
              ) : (
                <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Link href="/auth/sign-in">Get Started</Link>
                </Button>
              )}
            </div>

            {/* ✅ FIXED MOBILE BUTTON - LARGER + HIGHER Z */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-3 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 z-[9999] min-w-[48px] min-h-[48px] flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ✅ FIXED MOBILE MENU */}
      <MobileMenu
        isOpen={isMenuOpen}
        navLinks={navLinks}
        pathname={pathname}
        isSignedIn={isSignedIn}
        userInitials={userInitials}
        isProfileOpen={isProfileDropdownOpen}
        onNavClick={closeAllMenus}
        onProfileToggle={toggleProfileDropdown}
        onCloseMenu={toggleMenu} // ✅ ADDED CLOSE PROP
      />
    </>
  );
}

// ✅ Skeleton Component
function NavigationSkeleton() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] bg-white backdrop-blur-lg border-b border-gray-200/80 h-20" />
  );
}

// ✅ Profile Button Component
function ProfileButton({ 
  userInitials, 
  isOpen, 
  onToggle, 
  onClose 
}: {
  userInitials: string;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white text-sm hover:bg-blue-700"
      >
        {userInitials}
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-[10000]">
          <Link
            href="/account-settings"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
            onClick={onClose}
          >
            Account Settings
          </Link>
          <SignOutButton>
            <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
              Logout
            </button>
          </SignOutButton>
        </div>
      )}
    </div>
  );
}

// ✅ FIXED Mobile Menu Component
function MobileMenu({ 
  isOpen, 
  navLinks, 
  pathname, 
  isSignedIn, 
  userInitials, 
  isProfileOpen, 
  onNavClick, 
  onProfileToggle,
  onCloseMenu // ✅ NEW PROP
}: {
  isOpen: boolean;
  navLinks: Array<{href: string; label: string}>;
  pathname: string;
  isSignedIn: boolean;
  userInitials: string;
  isProfileOpen: boolean;
  onNavClick: () => void;
  onProfileToggle: () => void;
  onCloseMenu: () => void; // ✅ ADDED
}) {
  return (
    <>
      {/* ✅ OVERLAY - Closes on click */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[9980] md:hidden"
          onClick={onCloseMenu}
        />
      )}
      
      {/* ✅ MENU - FIXED Z-INDEX */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-[9990] md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* ✅ CLOSE BUTTON - TOP RIGHT */}
        <button
          onClick={onCloseMenu}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/90 hover:bg-gray-100 z-[10000]"
        >
          <X size={28} className="text-gray-600" />
        </button>

        <div className="flex flex-col h-full pt-20 px-6">
          {/* Nav Links */}
          <div className="flex-1 flex flex-col justify-center space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block text-center py-3 text-xl font-semibold transition-colors ${
                  pathname === link.href 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
                onClick={onNavClick}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Auth Section */}
          <div className="pb-8 space-y-4">
            {isSignedIn ? (
              <>
                <button
                  onClick={onProfileToggle}
                  className="w-full h-14 rounded-xl bg-blue-600 text-white text-lg font-semibold"
                >
                  {userInitials}
                </button>
                {isProfileOpen && (
                  <div className="space-y-3 bg-gray-50 rounded-xl p-4">
                    <Link
                      href="/account-settings"
                      className="block w-full text-center py-3 text-lg text-gray-700 hover:text-blue-600 font-medium"
                      onClick={onNavClick}
                    >
                      Account Settings
                    </Link>
                    <SignOutButton>
                      <Button 
                        variant="outline" 
                        size="lg" 
                        className="w-full h-12 border-gray-300" 
                        onClick={onNavClick}
                      >
                        Logout
                      </Button>
                    </SignOutButton>
                  </div>
                )}
              </>
            ) : (
              <Button size="lg" asChild className="w-full h-14 bg-blue-600 text-white text-lg">
                <Link href="/auth/sign-in" onClick={onNavClick}>Get Started</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}