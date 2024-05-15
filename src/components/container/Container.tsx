type Tcontainer={
    children: React.ReactNode
}

function Container({children}:Tcontainer) {
  return (
    <div className="p-7 text-right w-full">
      {children}
    </div>
  )
}

export default Container
