import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Error = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div>
      <h1>OOOPS...</h1>
      <p>ERROR 404</p>
      <h3>Page not found</h3>
      <p>
        Go back to the <Link href="/">Home Page</Link>
      </p>
    </div>
  );
};

export default Error;
