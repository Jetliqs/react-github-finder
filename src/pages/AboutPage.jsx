function AboutPage() {
  return (
    <div className="flex flex-col">
      <h1 className="text-4xl text-white my-4 font-bold">GitHub Finder</h1>
      <p>
        A React app to search GitHub profiles and see profile details. This
        project is part of the{' '}
        <a
          className="text-white"
          href="https://www.udemy.com/course/react-front-to-back-2022"
        >
          React Front To Back
        </a>{' '}
        Udemy course by{' '}
        <a className="text-white" href="https://www.traversymedia.com/">
          Brad Traversy.
        </a>
      </p>
      <p className="text-lg text-grey-400 my-4">
        Version: <span className="text-white">1.0.0</span>
      </p>
      <ul className="list-disc list-inside">
        Design:
        <li>
          Created by: <span className="text-white"> Ilias Tougui</span>
        </li>
        <li>
          Inspired from:
          <span className="text-white">
            {' '}
            Brad Traversy and Hassib Moddassir
          </span>
        </li>
      </ul>
    </div>
  );
}

export default AboutPage;
