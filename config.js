/* CONTENT: edit here. Leave a field empty and the page shows TO BE ANNOUNCED. */
const ev=(name,glyph,tag="")=>({name,glyph,tag,
  desc:"",            // paragraphs separated by a blank line
  fee:"",pool:"",date:"16–17 Oct 2026",time:"",venue:"",
  team:null,          // {min:2,max:4} or "individual"
  prize:{},           // {first:"",second:"",third:""}
  coordinators:[],    // [{name:"",phone:"+91...",email:""}]
  form:"",            // Google Form URL for Register Now
  img:"",poster:"event.png"});
const CONFIG={
  poster:"poster.jpeg",
  target:"2026-10-16T09:00:00+05:30",   // 16 Oct 2026; start time is a placeholder (IST)
  afterMsg:"QUBIT ’26 IS LIVE",
  newTab:true,
  dept:"Computer Science and Engineering",dates:"16–17 Oct",
  chairman:{name:"Dr. T V Rajini Kanth",role:"HOD CSE"},
  facCoord:["Dr. A. Ratna Raju, Asst Prof.","Dr. K. Satish Kumar, Assoc Prof.","Dr. P. Poornima, Asst Prof.","Ms. G. Naga Sujini, Asst Prof.","Ms. K. Shirisha, Asst Prof."],
  tech:[ev("Hardware Expo","",""),ev("Paper Presentation","",""),ev("Poster Presentation","",""),ev("Coding Competition","","Think. Build. Compete.")],
  non:[ev("Treasure Hunt","",""),ev("Mobile Gaming","",""),ev("Memory Game","",""),ev("Meme Contest","","")],
  gallery:[{src:"ar2.webp",label:"QUBIT archive 2"},{src:"ar3.webp",label:"QUBIT archive 3"},{src:"archive1.webp",label:"QUBIT archive 1"},{src:"preview (1).webp",label:"QUBIT preview 1"},{src:"preview.webp",label:"QUBIT preview"}],
  faculty:[{name:"Faculty 1",role:"Designation",photo:"f.webp"},{name:"Faculty 2",role:"Designation",photo:"f1.webp"},{name:"Faculty 3",role:"Designation",photo:"f2.webp"},{name:"Faculty 4",role:"Designation",photo:"f3.webp"},{name:"Faculty 5",role:"Designation",photo:"f4.webp"}],
  coordinators:Array.from({length:6},(_,i)=>({name:"Coordinator "+(i+1),role:"Role",photo:""})),
  location:"MGIT Main Rd, Kokapet, Gandipet, Telangana 500075",
  phone:"[Placeholder] Phone number",
  mapLink:"https://maps.app.goo.gl/DTohkTpXxJUZNh2g7",
  mapEmbed:"https://maps.google.com/maps?q=17.391051,78.3220892&z=16&output=embed"
};
