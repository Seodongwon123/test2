import Animation from './animation';

/* eslint-disable react/button-has-type */
export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            안녕하세요. 웹개발자 서동원입니다.
            <br className="hidden lg:inline-block" />
            React와 모던 자바스크립트에 관심이 많습니다.
          </h1>
          <p className="mb-8 leading-relaxed">
            프론트엔드와 백엔드를 모두 경험하고, 주로 React를 이용하여 개발합니다. React CRA와 Next.js를 사용하며 redux,
            mobx 등 상태관리를 다루고 있습니다. 다양한 css프레임워크와 css in css 또는 css in js를 프로젝트 환경에 맞게
            적절히 사용하여 빠른 UI 개발 및 디자인, 사용자에게 좋은 경험을 제공하기 위한 성능 또한 개발에 중요한 요소로
            생각합니다.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              프로젝트 보러가기
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Animation />
        </div>
      </div>
    </section>
  );
}
