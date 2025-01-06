import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { GraphQLClient, gql } from "graphql-request";
import { Link } from "react-router-dom";
import SocialHeader from "../../components/socialheader";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";

const graphcms = new GraphQLClient(`${process.env.REACT_APP_GRAPH_API_KEY}`);

const QUERY = gql`
  {
    posts(first: 100) {
      title
      slug
      date
      coverPhoto {
        url
      }
      content {
        text
      }
    }
  }
`;
function Blogs() {
  const [posts, setPosts] = useState();
  const getPosts = async () => {
    const { posts } = await graphcms.request(QUERY);
    console.log("Raw Posts", posts.length);

    posts.sort((a, b) => -a.date.localeCompare(b.date));
    setPosts(posts);
    console.log("Posts", posts);
  };
  useEffect(() => {
    if (!posts) {
      getPosts();
    }
    console.log("Posts", posts);
  }, [posts]);
  return (
    <>
      <SocialHeader />
      <Header />
      <div className="row justify-content-center pt-130">
        <div
          className="col-xl-6 col-lg-6 wow tpfadeUp"
          data-wow-duration=".9s"
          data-wow-delay=".3s"
        >
          <div className="service__section-box text-center pb-35">
            <h3 className="section-title title-anim">Blogs</h3>
          </div>
        </div>
      </div>
      <div className="postbox__area pb-100 pt-50">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div id="blog" className="postbox__wrapper pr-20">
                {posts &&
                  posts.map((p) => (
                    <article className="postbox__item format-image mb-50 transition-3">
                      <div
                        className="postbox__thumb w-img wow tpfadeUp"
                        data-wow-duration=".9s"
                        data-wow-delay=".3s"
                      >
                        <Link to={`/blog/${p.slug}`}>
                          <img
                            src={p.coverPhoto ? p.coverPhoto.url : "something"}
                            alt=""
                          />
                        </Link>
                      </div>
                      <div
                        className="postbox__content wow tpfadeUp"
                        data-wow-duration=".9s"
                        data-wow-delay=".5s"
                      >
                        <div className="postbox__meta">
                          <span>
                            <a href="#">{p.date}</a>
                          </span>
                        </div>
                        <h3 className="postbox__title">
                          <Link to={`/blog/${p.slug}`}>{p.title}</Link>
                        </h3>

                      </div>
                    </article>
                  ))}
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4">
              <div className="sidebar__wrapper">
                <div
                  className="sidebar__widget mb-40 wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".3s"
                >
                  <div className="sidebar__widge-title-box">
                    <h3 className="sidebar__widget-title">Search</h3>
                  </div>
                  <div className="sidebar__widget-content">
                    <div className="sidebar__search">
                      <form action="#">
                        <div className="sidebar__search-input-2">
                          <input
                            type="text"
                            placeholder="Search your keyword..."
                          />
                          <button type="submit">
                            <svg
                              width={18}
                              height={18}
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.01371 15.2219C11.9525 15.2219 15.1456 12.0382 15.1456 8.11096C15.1456 4.18368 11.9525 1 8.01371 1C4.07488 1 0.881836 4.18368 0.881836 8.11096C0.881836 12.0382 4.07488 15.2219 8.01371 15.2219Z"
                                stroke="#5F6168"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M16.9287 16.9996L13.0508 13.1331"
                                stroke="#5F6168"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div
                  className="sidebar__widget mb-40 wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".5s"
                >
                  <div className="sidebar__widge-title-box">
                    <h3 className="sidebar__widget-title">Recent Post</h3>
                  </div>
                  <div className="sidebar__widget-content">
                    <div className="sidebar__post rc__post">
                      {posts &&
                        posts.map((p) => (
                          <div className="rc__post mb-20 d-flex">
                            <div className="rc__post-thumb mr-20">
                              <Link to={`/blog/${p.slug}`}>
                                <img
                                  src={
                                    p.coverPhoto ? p.coverPhoto.url : "no Image"
                                  }
                                  alt=""
                                />
                              </Link>
                            </div>
                            <div className="rc__post-content">
                              <h3 className="rc__post-title">
                                <Link to={`/blog/${p.slug}`}>{p.title}</Link>
                              </h3>
                              <div className="rc__meta">
                                <span>{p.date}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-wrap gap-4 justify-center">
          <Card className="w-full max-w-[26rem] shadow-lg">
            <CardHeader floated={false} color="blue-gray">
              <img
                src="https://cdn.prod.website-files.com/641d54fdcc011edcca41c54a/64424637f35afa1c1cd6be30_639b1cd56c32a8a733e6b9ac_best-tips-to-become-debt-free-while-maximising-your-savings.jpeg"
                alt="ui/ux review check"
              />
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
            </CardHeader>
            <CardBody>
              <div className="mb-3 flex items-center justify-between">
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="font-medium"
                >
                  Debt Free Solution
                </Typography>
              </div>
              <Typography color="gray">
                Being debt-free means having minimal to no bad debts and
                maintaining an average level of good debts. It doesn't imply
                having no mortgage, bills, or car payments. It refers to
                managing debt responsibly, ensuring your debt is manageable and
                understanding your borrowing capacity and debt-to-income ratio
                (DTI).
              </Typography>

              <Link
                to="/service/debt-free-solution" // Define the route path
                className="w-full" // Full width for the link
              >
                <Button
                  ripple={false}
                  fullWidth={true}
                  className="bg-blue-500 text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                >
                  Read More
                </Button>
              </Link>

              {/* </div> */}
            {/* </CardBody> */}
          {/* </Card> */}
        {/* </div> */} 
      </div>
    </>
  );
}

export default Blogs;
