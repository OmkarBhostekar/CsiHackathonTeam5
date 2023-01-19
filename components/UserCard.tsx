import React from "react";
type Props = {};

const UserCard = (props: Props) => {
  const data = {
    id: "1",
    name: "Parteek Vishwakarma",
    email: "lastnamefirstname@gmail.com",
    about:
      "Here’s where you can share more about yourself: your history, work experience, accomplishments, interests, dreams, and more. You can even add images and use rich text to personalize your bio.",
    image:
      "https://www.cnet.com/a/img/resize/4bbb5d8eeffea0beb519f4f5a21192068d133c34/hub/2021/09/10/56cb167f-7bff-4076-9b00-d415067f5477/screenshot-2021-09-10-at-5-44-32-pm.png?auto=webp&fit=crop&height=900&width=1200",
    followers: "100",
    following: "100",
    blogs: "100",
    likes: "100",
    comments: "100",
    posts: "100",
  };

  return (
    <div className="mt-12 p-4 md:p-6 lg:p-12 flex flex-col max-w-[700px] dark:bg-gray-900 dark:text-white">
      <div className="rounded-3xl p-2">
        <div className="flex flex-col justify-between items-center gap-4">
          <div className="border border-8 border-solid border-primary-600 rounded-full">
          <img src={data.image} className="rounded-full h-32 w-32" />
          </div>
          <div className="flex gap-3 justify-between items-center w-full">
            <div className="flex flex-col items-center justify-center">
              <span className="font-semibold text-lg text-center">Post</span>
              <span className="font-thin text-lg text-center">
                {data.posts}
              </span>
            </div>
            <div>
              <div className="flex flex-col items-center justify-center">
                <span className="font-semibold text-lg text-center">
                  Followers
                </span>
                <span className="font-thin text-lg text-center">
                  {data.following}
                </span>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center justify-center">
                <span className="font-semibold text-lg text-center">
                  Following
                </span>
                <span className="font-thin text-lg text-center">23</span>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-5">
          <div className="grid">
            <span className="font-semibold text-lg md:text-xl">
              {data.name}
            </span>
            <span className="font-thin text-sm md:text-lg text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptate.
            </span>
          </div>
        </div>
        <div className="pt-5">
          <div className="grid">
            <span className="font-semibold text-lg md:text-xl">About</span>
            <span className="font-thin text-sm md:text-lg text-justify">
              {data.about}
            </span>
          </div>
        </div>
      </div>
      <div className="pt-6 flex justify-around items-center md:justify-start md:gap-5">
        <button className="text-white w-32 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 p-2 rounded-md  ">
          Edit Profile
        </button>
        <button className="text-white w-32 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 p-2 rounded-md">
          Follow
        </button>
      </div>
    </div>
  );
};

export default UserCard;
