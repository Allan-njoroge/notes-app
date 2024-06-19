const Notes = ({ title, date }) => {
  return (
    <a 
      href=""
      className="hover:bg-primary/20 rounded-md"
    >
    <div className="border-b border-input p-2 md:p-3 grid gap-2">
      <h1 className="font-semibold text-xl ">This is my first note</h1>
      <p className="text-sm text-muted-foreground">15 June 2024</p>
    </div>
    </a>
  )
}

export default Notes