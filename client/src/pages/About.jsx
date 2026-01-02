import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          alt=""
          className="w-full md:max-w-[450px]"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
            dolor quae debitis non adipisci at vitae sunt nam, sapiente, unde
            doloremque labore dolore deserunt, nobis molestiae nesciunt libero!
            At, reprehenderit?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            officia? Tenetur sit corrupti consectetur nemo! Cumque, nam
            corrupti, ex aut nesciunt, neque reiciendis nemo ea similique
            repellat eum eos aspernatur!
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            enim quas consectetur odit, architecto sequi repellendus
            reprehenderit totam reiciendis nihil esse sint laboriosam aut
            doloremque laborum sit similique excepturi blanditiis.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20 gap-2">
        <div className="border gap-1 px-10 md:px-16 py-8 sm:py-10 flex flex-col">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores,
            tempora corporis aspernatur omnis neque architecto sunt! Eveniet non
            quaerat, nisi quia, dolore architecto, provident laboriosam quas
            sunt laudantium at iusto.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-10 flex flex-col">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            delectus earum voluptates harum adipisci illo hic necessitatibus,
            non obcaecati sapiente minus dolorum dicta. Adipisci exercitationem
            ducimus impedit rem, aliquid eum!
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-10 flex flex-col">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ut
            reiciendis, voluptatibus quae sapiente laudantium perferendis
            reprehenderit nobis aspernatur illo maxime, dolorum, commodi cum
            nisi repellat nam perspiciatis id eius.
          </p>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  );
};

export default About;
