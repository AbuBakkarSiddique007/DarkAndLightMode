import './App.css'
import { useTheme } from './ThemeContext/ThemeContext'

function App() {

  const { theme, toggleTheme } = useTheme()
  console.log(theme);

  return (
    <>
      <div className='border-2 bg-green-500-100 min-h-screen p-10'>
        {/* Make a navbar :  */}
        <nav className="border-2 border-red-600 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-2xl font-bold">My App</div>
            <div className="flex space-x-4">
              <a href="#" className=" ">Home</a>
              <a href="#" className=" ">About</a>
              <a href="#" className=" ">Contact</a>
            </div>

            {/* toggle for mode  change */}
            <div className="flex items-center">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  onChange={toggleTheme}
                  checked={theme === "dark"}
                />
                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 dark:bg-gray-600 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
              </label>
              <span className="ml-3 text-sm">{theme === "dark" ? "Dark Mode" : "Light Mode"}</span>
            </div>
          </div>
        </nav>

        <div className='border-2 border-red-600'>

          <h1 className='text-3xl font-bold text-center mt-10'>
            <span className='text-red-600'>Dark</span> and <span className='text-red-600'>Light</span> Mode
          </h1>

          <h1 className='text-3xl font-bold text-center mt-10'>
            Hello world!
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum esse at vero sapiente modi eaque culpa cupiditate, blanditiis possimus aliquid non eveniet officia quod omnis natus enim assumenda veniam! Assumenda dolores expedita quasi explicabo harum voluptatibus esse veniam illum in omnis odit, alias quisquam neque, debitis, provident atque sunt nemo ea? Placeat, id voluptatum totam tenetur explicabo eum molestiae nobis deserunt optio non quia saepe hic ab similique distinctio expedita sit mollitia sequi! Dolor nam illum laborum perspiciatis ipsum, cupiditate ab doloribus saepe similique repellat maiores, sequi veritatis id nisi debitis alias magni iusto! Eveniet corporis vitae perferendis ad officiis!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo aspernatur dicta voluptates possimus quasi ipsum nisi? Sint aspernatur animi tenetur asperiores rerum natus deleniti ducimus iusto, voluptatum, ipsam dolor. Explicabo, quia? Pariatur a iusto iure placeat explicabo aut porro dolore quia odio fugit magni repellendus nulla itaque quas dolorum accusamus obcaecati, corrupti eum voluptatibus maiores? A reprehenderit voluptatem laudantium provident quas, quisquam eveniet explicabo veritatis est. Laudantium ea sed culpa quasi laboriosam perspiciatis quaerat voluptatum ad minus dolore ratione iusto voluptatibus, optio assumenda facere? Quisquam, fuga ipsa cum magnam, deserunt optio ab magni vero, ea accusamus quod odit a consequuntur.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. In cum autem est neque accusantium sequi ea doloribus impedit nostrum dicta, magni dolorum optio consequuntur necessitatibus. Voluptates molestias, velit dolore quam reiciendis voluptatum quia ad ipsa beatae. Minima iusto ratione eveniet temporibus repellendus nobis nesciunt, illo ea libero repudiandae possimus maxime earum, rerum quo debitis, voluptatum ullam consequatur sit voluptate? Enim ea expedita placeat unde magnam voluptatibus fugit soluta nostrum adipisci illo iste, consequuntur earum quibusdam natus voluptates ducimus quod deleniti amet. Deserunt quisquam odio, ullam rerum ad quidem veritatis totam magnam corporis voluptatum deleniti, voluptatem, vel ex tempora provident porro!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam esse magni repellendus, aut a atque dolore earum delectus, cum nostrum quia odio architecto cumque voluptatum aliquam asperiores assumenda quas dolorem hic, iusto optio aspernatur? Consectetur nulla temporibus et doloremque? Sint provident nihil, officia iure dicta iusto quas nostrum omnis ex iste? Nesciunt, beatae veniam illo dolorum veritatis at. Omnis ad quas autem quod illo id tempore, repudiandae vel. Obcaecati non molestias sint dolorum! Sit accusamus ut fugit? In quasi tenetur cupiditate exercitationem corporis recusandae laborum cum ad eius perspiciatis maiores nobis, eveniet magni, alias laboriosam sapiente ipsam nostrum voluptate placeat.
          </p>

        </div>
        <footer className='border-2 border-red-600'>
          <div className="container mx-auto p-4">
            <div className="text-center ">
              &copy; 2023 My App. All rights reserved.
            </div>
          </div>
          <div className="container mx-auto p-4">
            <div className="text-center ">
              <a href="#" className=" ">Privacy Policy</a>
              <a href="#" className=" ">Terms of Service</a>
            </div>
          </div>
          <div className="container mx-auto p-4">
            <div className="text-center ">
              <a href="#" className=" ">Facebook</a>
              <a href="#" className=" ">Twitter</a>
              <a href="#" className=" ">Instagram</a>
            </div>
          </div>
          <div className="container mx-auto p-4">
            <div className="text-center">
              <a href="#" className=" ">Contact Us</a>
              <a href="#" className=" ">Support</a>
            </div>
          </div>
          <div className="container mx-auto p-4">
            <div className="text-center ">
              <a href="#" className=" ">FAQ</a>
              <a href="#" className=" ">Help Center</a>
            </div>
          </div>
          <div className="container mx-auto p-4">
            <div className="text-center">
              <a href="#" className=" ">Blog</a>
              <a href="#" className=" ">Careers</a>
            </div>
          </div>
        </footer>

      </div>

    </>
  )
}

export default App
