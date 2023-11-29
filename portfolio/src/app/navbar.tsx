import Link from "next/link";

export default function Navbar()
{

    return (

<div className="navbar bg-base-100">
  <div className="navbar-start">
  
    <a className="btn btn-ghost text-xl">Portfolio</a>
  </div>
 
  <div className="navbar-end">
  <button className="bg-blue-600 rounded-lg  " >
<a href="/cv/resume.pdf" download={"resume.pdf"}><h1 className="text-center p-2 text-white">Download Resume</h1></a>
  </button>
    {/* <a className="btn">      <a href="/cv/resume.pdf"download={"resume.pdf"}>Download Resume</a>
</a> */}
  </div>
</div>

    )
}