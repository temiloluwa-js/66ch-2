import { useParams } from "react-router-dom";
import { Footer, MainLayout } from "src/components";
import { motion, useIsPresent } from "framer-motion";
import PostDetails from "../components/PostContent/PostDetails";
import { useLayoutEffect } from "react";
import { PostExtras } from "../components/PostContent/PostExtras";

export default function PostContent() {
  const isPresent = useIsPresent();
  const { authorId = "null" } = useParams();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <MainLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <PostDetails authorId={authorId} />
        <div className="w-full md:w-10/12 mx-auto">
          <PostExtras />
        </div>
        <Footer />
      </motion.div>
    </MainLayout>
  );
}
