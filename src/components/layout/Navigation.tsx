
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <img src="/lovable-uploads/f2b3323c-afa7-4803-8c54-e898263fe3af.png" alt="MedLink Logo" className="h-12 w-auto" />
          </div>
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="gap-8">
                <NavigationMenuItem>
                  <NavigationMenuLink href="/" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/about" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
                    About Us
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-gray-900">Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[200px] p-2">
                      <NavigationMenuLink href="/services/mentors" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                        For Mentors
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/services/mentees" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                        For Mentees
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/resources" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
                    Resources
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};
