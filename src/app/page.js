export default function Home() {
  return (
    <main className="flex justify-center flex-col items-center bg-white">
        <section className="bg-[url('/Hero.svg')] bg-no-repeat bg-cover bg-center min-h-screen w-screen flex justify-center">
          <div className="flex min-h-screen justify-center flex-col max-w-6xl w-screen gap-3">
            <h1 className="text-6xl font-semibold text-AquaSenseNeutralGrey ">Single-point</h1>
            <h1 className="text-7xl font-bold text-AquaSenseBlue">Aquaculture<br/>Management</h1>
            <p className="mb-4 text-AquaSenseNeutralGrey">Simplify the supervision of your fish farms with AquaSense</p>
            <button className="bg-AquaSenseBlue text-white p-2 text-sm rounded w-32 h-14">Register</button>
          </div>
        </section>
        <section className="flex justify-center flex-row gap-2 max-w-6xl">
          <img src="./MobileDashboard.svg" alt="AquaSense Logo"/>
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-semibold mb-2 text-AquaSenseTextDarkGrey">Aquaculture intelligence at <br/>your fingertips</h1>
            <p className="mb-20 text-AquaSenseNeutralGrey">A modular device designed to streamline fish farm operations through single-point management, enhancing efficiency, and harnessing the power of the Internet of Things (IoT) coupled with a dedicated filtration system for UV, mechanical and biological media. This innovative solution simplifies the supervision of farm activities, ensuring seamless control and optimization.</p>
            <button className="bg-AquaSenseBlue text-white p-2 text-sm rounded w-32 h-14">Learn More</button>
          </div>
        </section>
        <section className="py-12 min-h-screen max-w-6xl">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-wide text-AquaSenseTextDarkGrey">Features</h2>
            <p className="mt-2 text-3xl leading-8 tracking-tight text-AquaSenseNeutralGrey sm:text-sm">
              What features make Aquasense the ultimate water filtration solution?
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {/* Feature 1 */}
              <div className="text-center p-6 pt-8 flex flex-col rounded-lg shadow-lg w-72 h-72">
                <div className="mb-4">
                  <div className="h-12 w-12 mx-auto flex items-center justify-center">
                   <img src="./icons/MA.svg" alt="Mobile App Icon"/>
                  </div>
                </div>
                <h3 className="text-lg leading-6  font-bold text-AquaSenseNeutralGrey">Mobile App</h3>
                <p className="mt-2 text-sm text-AquaSenseNeutralGrey">
                  AquaSense features an IoT-driven mobile application. When you want to make fine adjustments, you can use your mobile device to easily adjust the light, temperature, and flow within your setup.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="text-center p-6 pt-8 flex flex-col rounded-lg shadow-lg w-72 h-72">
                <div className="mb-4">
                  <div className="h-12 w-12 mx-auto flex items-center justify-center">
                    <img src="./icons/DF.svg" alt="Dynamic Filtration Icon"/>
                  </div>
                </div>
                <h3 className="text-lg leading-6  font-bold text-AquaSenseNeutralGrey">Dynamic Filtration</h3>
                <p className="mt-2 text-sm text-AquaSenseNeutralGrey">
                  It integrates both mechanical and biological filtration with the filter media of choice, giving fish farmers a centralized control of equipment and easy maintenance.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="text-center p-6 pt-8 flex flex-col rounded-lg shadow-lg w-72 h-72">
                <div className="mb-4">
                  <div className="h-12 w-12 mx-auto flex items-center justify-center">
                    <img src="./icons/Monitoring.svg" alt="Monitoring Icon"/>
                  </div>
                </div>
                <h3 className="text-lg leading-6  font-bold text-AquaSenseNeutralGrey">Monitoring</h3>
                <p className="mt-2 text-sm text-AquaSenseNeutralGrey">
                  Real-time monitoring of critical water parameters like dissolved oxygen, pH, turbidity, salinity, and temperature for comprehensive oversight.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="text-center p-6 pt-8 flex flex-col rounded-lg shadow-lg w-72 h-72">
                <div className="mb-4">
                  <div className="h-12 w-12 mx-auto flex items-center justify-center">
                      <img src="./icons/Modular.svg" alt="Modular Icon"/>
                  </div>
                </div>
                <h3 className="text-lg leading-6  font-bold text-AquaSenseNeutralGrey">Modular</h3>
                <p className="mt-2 text-sm text-AquaSenseNeutralGrey">
                  AquaSense will come in nodes for easy integration in pond cultures. Just one module for the central device and all other ponds will have another module housing all the sensors.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="text-center p-6 pt-8 flex flex-col rounded-lg shadow-lg w-72 h-72">
                <div className="mb-4">
                  <div className="h-12 w-12 mx-auto flex items-center justify-center">
                    <img src="./icons/MC.svg" alt="Manual Configuration Icon"/>
                  </div>
                </div>
                <h3 className="text-lg leading-6  font-bold text-AquaSenseNeutralGrey">Manual Configuration</h3>
                <p className="mt-2 text-sm text-AquaSenseNeutralGrey">
                  Easily configure water parameter thresholds to cater to specific species in each pond group, tailoring their environment to perfection.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="text-center p-6 pt-8 flex flex-col rounded-lg shadow-lg w-72 h-72">
                <div className="mb-4">
                  <div className="h-12 w-12 mx-auto flex items-center justify-center">
                    <img src="./icons/AN.svg" alt="Alerts and Notification Icon"/>
                  </div>
                </div>
                <h3 className="text-lg leading-6 font-bold text-AquaSenseNeutralGrey">Alerts and Notification</h3>
                <p className="mt-2 text-sm text-AquaSenseNeutralGrey">
                  Receive immediate alert notifications when any parameter exceeds the predefined limits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center flex-col gap-2 max-w-6xl min-h-screen">
        <div className="relative">
          {/* Basic Package */}
          <img src="./BasicPackage.png" alt="AquaSense Basic Package" className="mb-12"/>
          <div className="absolute top-0 left-0 p-14">
            <h2 className="text-4xl font-bold text-AquaSensePackage">Basic Package</h2>
            <p className="text-lg text-AquaSenseGrey mt-2">1 Central Device with Mobile App and 1 Node</p>
            <button className="w-36 h-14 mt-4 px-4 py-2 text-sm bg-AquaSenseBlue text-white hover:bg-blue-700">
              Subscribe
            </button>
          </div>
        </div>

        <div className="relative">
          {/* Enterprise Package */}
          <img src="./EnterprisePackage.png" alt="AquaSense Enterprise Package"/>
          <div className="absolute top-0 left-0 p-14">
            <h2 className="text-4xl font-bold text-AquaSensePackage">Enterprise Package</h2>
            <p className="text-lg text-AquaSenseGrey mt-2">1 Central Device with Mobile App and 5 Nodes</p>
            <button className="w-36 h-14 mt-4 px-4 py-2 text-sm bg-AquaSenseBlue text-white hover:bg-blue-700">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-6xl min-h-screen w-full mb-32">
        <div className="w-full">
          <div className="border-t border-gray-300 my-8"></div>
          <h1 className="text-center text-4xl font-semibold text-AquaSenseBlue mb-6">Quarterly Maintenance</h1>
          <div className="flex gap-12 justify-center mb-6">
            <div className="w-64 h-72 flex justify-center items-center flex-col bg-AquaSenseLightBlue rounded-3xl">
              <img src="./Checking.png" alt="Checking Icon" className="w-36"/>
              <p>Checking</p>
            </div>
            <div className="w-64 h-72 flex justify-center items-center flex-col bg-AquaSenseLightGreen rounded-3xl">
              <img src="./Testing.png" alt="Testing Icon" className="w-32 mb-4"/>
              <p>Testing</p>
            </div>
            <div className="w-64 h-72 flex justify-center items-center flex-col bg-AquaSenseLightBlue rounded-3xl ">
              <img src="./Calibration.png" alt="Calibration Icon" className="w-36"/>
              <p>Calibration</p>
            </div>
          </div>
          <p className="text-center"> Subscription to quarterly maintenance will cost around<br/>P5,000 per visit</p>
          <div className="border-t border-gray-300 my-8"></div>
          <h1 className="text-center text-4xl font-semibold text-AquaSenseBlue mb-6">Annual App Subscription</h1>
          <div className="flex gap-12 justify-center mb-6">
            <div className="w-64 h-72 flex justify-center items-center flex-col rounded-3xl shadow-xl">
              <img src="./AppFeatures.png" alt="App Features Icon" className="w-28"/>
              <p>App Features</p>
            </div>
            <div className="w-64 h-72 flex justify-center items-center flex-col rounded-3xl shadow-xl">
              <img src="./CloudStorage.png" alt="Cloud Storage Icon" className="w-28"/>
              <p>Cloud Storage</p>
            </div>
            <div className="w-64 h-72 flex justify-center items-center flex-col rounded-3xl shadow-xl">
              <img src="./Updates.png" alt="Updates Icon" className="w-24"/>
              <p>Updates</p>
            </div>
          </div>
          <p className="text-center"> Subscription to quarterly maintenance will cost around<br/>P5,000 per visit</p>
        </div>
      </section>

    </main>
  );
}
