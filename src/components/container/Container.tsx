type Tcontainer={
    children: React.ReactNode
}

function Container({children}:Tcontainer) {
  return (
    <div className="p-4 w-full">
      {children}
    </div>
  )
}

export default Container
