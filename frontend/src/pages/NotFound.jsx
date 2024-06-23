import Navbar from "@/components/Navbar";

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center min-h-[100vh] w-full items-center">
        <h1 className="grid gap-3 text-center font-bold text-6xl">
          <span>404</span>
          <span className="text-muted-foreground">Page Not Found!</span> 
        </h1>
      </div>
    </>
  )
}

export default NotFound