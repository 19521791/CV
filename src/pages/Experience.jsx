const Experience = () => {
  return (
    <section className="max-container">
      <div className="my-auto">
        <h2 className="subhead-text mb-8">
          Experience
        </h2>

        <div>
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <div className="flex-grow">
                <h3 className="text-3xl font-semibold text-blue-500 hover:text-sky-500 hover:underline">
                  <a href="https://helloclever.co/" target="_blank" rel="noopener noreferrer">
                    <span className="mr-1.5">Hello Clever</span>
                    <i className="fa fa-external-link text-base" aria-hidden="true"></i>
                  </a>
                </h3>
                <div className="text-xl">Back-end Engineer</div>
              </div>
              
              <div className="text-right text-sky-600 whitespace-nowrap font-semibold">
                <span>June 2023 - Sep 2024</span>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1.5">
                <i className="fa fa-bookmark icon-relative text-yellow-500" />
                <a className="text-sky-600 whitespace-nowrap font-semibold text-lg hover:text-sky-500 hover:underline" href="https://helloclever.co/" target="_blank" rel="noopener noreferrer">Hello Clever</a>
                <span className="font-semibold text-gray-600 text-lg">Main project with Australia Merchant</span>
              </div>

              <div>
                <p>
                  • Design and implement additional functionalities based on the requirements of the Product Owner.
                </p>

                <span className="font-semibold text-gray-600">
                  &ldquo;Hello Clever Payment Gateway, the first Australian buy-to-earn platform, simplifies shopping, payments, and managing money for everyone.&rdquo;
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1.5">
                <i className="fa fa-bookmark icon-relative text-yellow-500" />
                <span className="font-semibold text-gray-600 text-lg">Adapts well to tech stack changes. Deliver tasks consistently on time.</span>
              </div>

              <div>
                <p>
                  • Collaborate with the Front-end team and the QA team to deliver new
                  features on time.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1.5">
                <i className="fa fa-bookmark icon-relative text-yellow-500" />
                <span className="font-semibold text-gray-600 text-lg">
                  Analyze work, ask questions to relevant departments to clarify work.
                </span>
              </div>

              <div>
                <p>
                  • Refactor code and write documentation for public APIs
                </p>
                <p>
                  • Integrate multiple suppliers into the system.
                </p>
              </div>
            </div>
   
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience
