import ScrollBar from "@/components/UI/ScrollBar";
import { NextPage } from 'next';

const Works: NextPage = () => {
  return (
    <ScrollBar>
      <div className="w-full grid grid-cols-1 gap-10 mt-52 mb-24">
        <div><h1 className="text-4xl">Works</h1></div>
        <div className="bg-text text-background h-40 p-5 rounded-md shadow-sm shadow-stone-700 min-h-max overflow-y-auto scroll-m-10 scrollbar-transparent">
          {" "}
          <h2 className="p-4">Wep Api Server With CRUD Capabilities</h2>
          <p className="p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            laboriosam ut, soluta cum veritatis animi laborum perspiciatis
            debitis vitae? Dolorem consequuntur sint praesentium harum culpa
            nulla consectetur quod non at!
          </p>
        </div>
        <div className="bg-text text-background h-40 p-5 rounded-md">
          {" "}
          <h2>Placeholder Title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            laboriosam ut, soluta cum veritatis animi laborum perspiciatis
            debitis vitae? Dolorem consequuntur sint praesentium harum culpa
            nulla consectetur quod non at!
          </p>
        </div>
        <div className="bg-text text-background h-40 p-5 rounded-md">
          {" "}
          <h2>Placeholder Title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            laboriosam ut, soluta cum veritatis animi laborum perspiciatis
            debitis vitae? Dolorem consequuntur sint praesentium harum culpa
            nulla consectetur quod non at!
          </p>
        </div>
        <div className="bg-text text-background h-40 p-5 rounded-md">
          {" "}
          <h2>Placeholder Title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            laboriosam ut, soluta cum veritatis animi laborum perspiciatis
            debitis vitae? Dolorem consequuntur sint praesentium harum culpa
            nulla consectetur quod non at!
          </p>
        </div>

        <div className="bg-text text-background h-40 p-5 rounded-md">
          {" "}
          <h2>Placeholder Title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            laboriosam ut, soluta cum veritatis animi laborum perspiciatis
            debitis vitae? Dolorem consequuntur sint praesentium harum culpa
            nulla consectetur quod non at!
          </p>
        </div>
      </div>
    </ScrollBar>
  );
};

export default Works;
