import type { NextPage } from "next"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWifi } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { BlogTop } from "../components/Top/Blog"

const Home: NextPage = () => {
  return (
    <>
      <section className="bg-pink-500 text-white pt-14 pb-16">
        <div className="w-11/12 mx-auto md:flex md:justify-between md:items-center md:w-10/12">
          <hgroup>
            <h1 className="text-2xl md:text-4xl m-0">Shimabu IT University</h1>
            <h2 className="text-base mt-1 mb-0">
              しまぶーのポートフォリオのページです
            </h2>
          </hgroup>
          <div className="space-x-3 mt-11 md:mt-0">
            <FontAwesomeIcon className="fa-lg" icon={faTwitter} />
            <FontAwesomeIcon className="fa-lg" icon={faFacebook} />
            <FontAwesomeIcon className="fa-lg" icon={faWifi} />
          </div>
        </div>
      </section>
      <BlogTop />
    </>
  )
}

export default Home
