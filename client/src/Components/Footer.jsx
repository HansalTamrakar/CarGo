
      import React from 'react'
      
      const Footer = () => {
        return (
            <footer class="bg-gray-900 text-gray-300 py-20 ">
            <div class="container mx-auto px-4">
              <div class="flex flex-wrap -mx-4">
                <div class="w-full md:w-1/4 px-4 mb-8 md:mb-0">
                  <h2 class="text-xl font-bold mb-4">About Us</h2>
                  <p>
                    We are on a motive to provide best services on Renting and
                    Selling the Car in a India. We offer the Most Competitive Price
                    and give Discounts on different seasons
                  </p>
                </div>
                <div class="w-full md:w-1/4 px-4 mb-8 md:mb-0">
                  <h2 class="text-xl font-bold mb-4">Quick Links</h2>
                  <ul>
                    <li>
                      <a href="#" class="hover:text-gray-500">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#" class="hover:text-gray-500">
                        Cars
                      </a>
                    </li>
                    <li>
                      <a href="#" class="hover:text-gray-500">
                        Services
                      </a>
                    </li>
                    <li>
                      <a href="#" class="hover:text-gray-500">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="w-full md:w-1/4 px-4 mb-8 md:mb-0">
                  <h2 class="text-xl font-bold mb-4">Contact Us</h2>
                  <p>123 Main Street</p>
                  <p>City, State, ZIP</p>
                  <p>Email: info@example.com</p>
                  <p>Phone: 123-456-7890</p>
                </div>
                <div class="w-full md:w-1/4 px-4 mb-8 md:mb-0">
                  <h2 class="text-xl font-bold mb-4">Follow Us</h2>
                  <ul class="flex">
                    <li class="mr-4">
                      <a href="#">
                        <i class="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li class="mr-4">
                      <a href="#">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li class="mr-4">
                      <a href="#">
                        <i class="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
                <p>&copy; 2024 CarWebsite. All rights reserved.</p>
              </div>
            </div>
          </footer>
        )
      }
      
      export default Footer;