"use client"
import { useState, useEffect } from "react"

export default function APITestPage() {
  const [name, setName] = useState<string>()

  useEffect(() => {
    fetch("/api/user")
      .then((res) => res.json())
      .then((data) => setName(data.name))
  }, [])

  return (
    <div>
      <div>
        API route from <span className="font-bold">Client</span>
      </div>
      <div>Name: {name}</div>
    </div>
  )
}
