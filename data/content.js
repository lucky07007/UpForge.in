export const tracks = [
  {id:'ai-ml', title:'AI / ML & GenAI', short:'AI / ML', badge:'Fast-moving', desc:'Python, ML foundations, LLM apps, evaluation and responsible AI.', skills:['Python','ML fundamentals','LLM APIs','RAG basics','Evaluation','AI product thinking']},
  {id:'fullstack', title:'Full-Stack Development', short:'Full Stack', badge:'Core', desc:'Build, debug and explain modern web products from browser to database.', skills:['JavaScript','React','Next.js','APIs','SQL','Testing']},
  {id:'data', title:'Data Analytics & Data Engineering', short:'Data', badge:'High demand', desc:'Turn raw data into useful decisions with SQL, Python and data pipelines.', skills:['SQL','Python','Excel','Dashboards','Data modeling','Pipelines']},
  {id:'cloud', title:'Cloud & DevOps', short:'Cloud / DevOps', badge:'Infrastructure', desc:'Deploy, monitor and scale applications with cloud, Linux and automation.', skills:['Linux','Cloud basics','Docker','CI/CD','Networking','Observability']},
  {id:'cyber', title:'Cybersecurity', short:'Cybersecurity', badge:'Security', desc:'Learn security fundamentals, application risks, SOC thinking and secure engineering.', skills:['Networking','Web security','OWASP','Logs','IAM','Threat thinking']},
];
export const roles = tracks.map(t=>({id:t.id,title:t.title,desc:t.desc}));

export const lessons = [
 {id:'resume',title:'Make your resume interview-ready',tag:'Foundation',mins:12,body:['Your resume is a map for the interview. Every strong bullet should be backed by an example you can explain without exaggerating.','For each project, know the problem, your contribution, one technical decision, one trade-off, one failure and what you would improve today.','Use numbers only when they are real: users, rows, latency, time saved, accuracy or another measurable outcome.'],practice:'Pick one project and explain the problem, your contribution and result in 90 seconds.'},
 {id:'project',title:'Explain a project without rambling',tag:'Communication',mins:10,body:['Use problem → approach → contribution → trade-off → result → lesson.','Expect follow-ups such as Why this database? How did you test it? What broke? What happens at ten times the traffic?','The goal is not complexity. The goal is evidence that you understand what you built.'],practice:'Explain your most important technical decision and the alternative you rejected.'},
 {id:'problem',title:'Think like a strong problem solver',tag:'Technical',mins:14,body:['Restate the problem and clarify inputs, outputs and constraints before coding.','Break the problem into smaller checks. Reproduce bugs before changing code. Test the smallest useful hypothesis first.','When stuck, explain what you know, what you tried and what evidence would change your next step.'],practice:'Describe how you would debug an API that suddenly became slow.'},
 {id:'behavioral',title:'Answer behavioral questions with evidence',tag:'Interview',mins:11,body:['A concise STAR-style answer works well: situation, task, action and result. Spend most of the time on what you actually did.','Do not invent leadership or impact. Honest small examples are stronger than inflated stories.','Finish with what you learned or what you would do differently.'],practice:'Tell a short story about something you built that did not work as expected.'},
 {id:'technical-round',title:'Prepare for a technical round',tag:'Technical',mins:18,body:['Technical interviews test reasoning as much as recall. Start by clarifying requirements, then state your approach before writing code.','Know complexity, edge cases, testing strategy and trade-offs for the concepts you list on your resume.','If you use AI while building projects, be able to explain what the generated code does and how you verified it.'],practice:'Pick one technical problem and explain your solution before writing code.'},
 {id:'ai-era',title:'Interviewing in the AI era',tag:'Modern hiring',mins:12,body:['AI can accelerate coding and research, but interviews still test whether you can reason, communicate and take responsibility for your work.','Practice explaining your decisions without depending on generated wording. Be ready to show how you verify AI output.','Build proof: a project, a clear explanation, a test, a measurable result and a lesson learned.'],practice:'Explain one way AI helped your project and one way you verified that the AI output was correct.'},
 {id:'startup',title:'Prepare for startup internships',tag:'Career',mins:13,body:['Startups often value ownership, learning speed and judgment alongside technical skills.','Prepare examples where requirements were incomplete. Explain how you chose what to do first and how you communicated uncertainty.','Be ready to discuss trade-offs between a quick first version and a more robust solution.'],practice:'You have one day to ship a rough version. What would you cut and why?'},
 {id:'remote',title:'Prepare for remote interviews',tag:'Modern hiring',mins:9,body:['Test microphone, camera, browser permissions and your connection before the call.','Keep notes short. Reading a script word-for-word makes otherwise strong answers feel less natural.','Practice concise explanations and pause between ideas so the interviewer can guide depth.'],practice:'Give your 45-second introduction as if the interview has just started.'}
];

export const trackModules = {
 'ai-ml': [
  ['Python for AI interviews','Syntax, data structures, functions and clean problem-solving.'],['ML foundations','Train/validation/test, overfitting, metrics and model trade-offs.'],['LLM application basics','Prompts, context, tool use, RAG and evaluation.'],['AI project storytelling','Explain architecture, data, evaluation, failure modes and cost.']
 ],
 fullstack:[
  ['JavaScript & browser fundamentals','Async code, DOM, HTTP, browser storage and debugging.'],['React & Next.js','Components, state, server/client boundaries and performance.'],['APIs & databases','REST, validation, authentication, SQL and data modeling.'],['Production thinking','Testing, caching, observability, security and trade-offs.']
 ],
 data:[
  ['SQL foundations','Filtering, joins, aggregation, windows and query reasoning.'],['Analytics thinking','Metrics, cohorts, funnels and turning questions into decisions.'],['Python for data','Cleaning, exploration and reproducible analysis.'],['Data engineering basics','Pipelines, data quality, modeling and batch vs streaming.']
 ],
 cloud:[
  ['Linux & networking','Processes, ports, DNS, HTTP and practical debugging.'],['Cloud foundations','Compute, storage, networking, IAM and cost awareness.'],['Containers & CI/CD','Docker images, deployment pipelines and rollback thinking.'],['Reliability basics','Logs, metrics, alerts, scaling and incident response.']
 ],
 cyber:[
  ['Security foundations','Threats, assets, risk, authentication and least privilege.'],['Web application security','OWASP-style risks, input validation and secure sessions.'],['SOC & incident thinking','Logs, detection, triage and communicating an incident.'],['Secure engineering','Secrets, dependencies, reviews and security-by-design.']
 ]
};

export const quizzes = [
 {id:'ai-foundations',title:'AI & GenAI foundations',track:'ai-ml',questions:[
  {q:'What is overfitting?',options:['A model performs well on training data but poorly on unseen data','A model has no parameters','A database query is slow','A prompt is too short'],a:0,e:'Overfitting means the model has learned the training examples too specifically and generalizes poorly.'},
  {q:'Why should an LLM application be evaluated with representative examples?',options:['To make the UI prettier','To measure whether outputs are useful and reliable for the intended task','To eliminate all latency','To avoid authentication'],a:1,e:'Representative evaluation cases reveal quality, failure modes and regressions in the real use case.'},
  {q:'What is a useful reason to use retrieval in an LLM app?',options:['To ground answers in a selected knowledge source','To make every answer creative','To remove all need for testing','To encrypt the browser'],a:0,e:'Retrieval can provide relevant context from a knowledge source so the model is less dependent on its training memory.'}
 ]},
 {id:'fullstack-foundations',title:'Full-stack interview foundations',track:'fullstack',questions:[
  {q:'What does HTTP 404 usually mean?',options:['Server crashed','Unauthorized','Resource not found','Request succeeded'],a:2,e:'404 means the server could not find the requested resource.'},
  {q:'What is a closure in JavaScript?',options:['A CSS scope','A function retaining access to its lexical environment','A promise state','A browser cache'],a:1,e:'A closure lets a function access variables from its surrounding lexical scope later.'},
  {q:'What should you do first when an API is unexpectedly slow?',options:['Rewrite everything','Measure and identify the bottleneck','Delete the database','Increase every timeout'],a:1,e:'Measure first. Logs, profiling and traces help locate the actual bottleneck.'}
 ]},
 {id:'data-foundations',title:'Data & SQL interview foundations',track:'data',questions:[
  {q:'Which clause filters grouped results?',options:['WHERE','HAVING','ORDER BY','LIMIT'],a:1,e:'HAVING filters groups after aggregation.'},
  {q:'What is a primary key used for?',options:['Styling rows','Uniquely identifying records','Encrypting tables','Sorting every query'],a:1,e:'A primary key uniquely identifies a record.'},
  {q:'What is the best first response to an unclear analytics request?',options:['Guess the metric','Clarify the decision and success definition','Build a dashboard immediately','Collect everything'],a:1,e:'Clarify the decision, audience and exact metric definition before building.'}
 ]},
 {id:'cloud-foundations',title:'Cloud & DevOps foundations',track:'cloud',questions:[
  {q:'What is CI primarily intended to improve?',options:['Frequent automated integration and testing','Manual server access','Graphic design','Password sharing'],a:0,e:'Continuous integration helps teams integrate changes frequently with automated checks.'},
  {q:'Why use logs and metrics together?',options:['They are identical','They provide complementary evidence about system behavior','They replace testing','They remove the need for alerts'],a:1,e:'Metrics show patterns and trends; logs provide detailed event context.'},
  {q:'What is least privilege?',options:['Every user gets admin access','Give identities only the access they need','Disable authentication','Store passwords in source code'],a:1,e:'Least privilege limits access to what is necessary for the task.'}
 ]},
 {id:'cyber-foundations',title:'Cybersecurity foundations',track:'cyber',questions:[
  {q:'What does authentication answer?',options:['What are you allowed to do?','Who are you?','How fast is the server?','Where is the database?'],a:1,e:'Authentication establishes identity; authorization determines what that identity can access.'},
  {q:'Why validate untrusted input?',options:['To reduce security and correctness risks','To make passwords shorter','To skip logging','To guarantee zero bugs'],a:0,e:'Input validation helps constrain unexpected or malicious data before it reaches sensitive operations.'},
  {q:'What is a good first step during a suspected incident?',options:['Delete all logs','Preserve evidence and understand scope','Post credentials publicly','Restart every server immediately'],a:1,e:'Preserving evidence and understanding scope helps responders act safely and avoid destroying useful information.'}
 ]},
 {id:'behavioral',title:'Interview judgment',track:'all',questions:[
  {q:'If you do not know an interview answer, what is strongest?',options:['Pretend','Give a random answer','State what you know and explain how you would verify the rest','End the interview'],a:2,e:'Honest reasoning plus a verification plan demonstrates judgment without inventing knowledge.'},
  {q:'A good project answer should emphasize:',options:['Every library used','Your contribution and decisions','Only the final UI','Buzzwords'],a:1,e:'Interviewers need evidence of your contribution, decisions and understanding.'},
  {q:'For a behavioral story, spend most time on:',options:['Background','Your actions and reasoning','Company history','The question itself'],a:1,e:'The interviewer learns most from what you did, why you did it and what happened.'}
 ]}
];

export const tips=[
 ['Know every line of your resume','If you list a technology, be ready to explain where and why you used it.'],
 ['Practice aloud','Knowing a concept and explaining it under pressure are different skills.'],
 ['Use numbers only when real','Evidence is useful; invented metrics destroy trust.'],
 ['Say what you do not know','Explain how you would verify an answer instead of guessing confidently.'],
 ['Use AI, then verify','Treat generated code or explanations as a draft that needs tests, references or experiments.'],
 ['Ask better questions','Evaluate the role too: mentorship, expectations, problem, team and success criteria.']
];

export const videos=[
 {id:'mit-ocw',title:'MIT OpenCourseWare',type:'Open learning video library',desc:'University lectures and course material across computer science, algorithms and systems.',url:'https://ocw.mit.edu/search/?d=Electrical%20Engineering%20and%20Computer%20Science&l=Undergraduate'},
 {id:'khan',title:'Khan Academy Computing',type:'Free learning videos',desc:'Accessible computing, algorithms and programming explanations for fundamentals.',url:'https://www.khanacademy.org/computing'},
 {id:'wikimedia',title:'Wikimedia Commons videos',type:'Open media library',desc:'Searchable video/media with item-level licensing information. Check each item before reuse.',url:'https://commons.wikimedia.org/wiki/Category:Videos'},
 {id:'archive',title:'Internet Archive',type:'Public/open archive',desc:'Large video archive with item-level rights and metadata. Verify the rights of each item.',url:'https://archive.org/details/movies'},
 {id:'nasa',title:'NASA multimedia',type:'Public agency media',desc:'Science and engineering media with NASA usage guidance; check individual asset terms.',url:'https://www.nasa.gov/multimedia/'}
];

export const resources=[
 {title:'freeCodeCamp',desc:'Free programming curriculum and practice for web development, data and more.',url:'https://www.freecodecamp.org/'},
 {title:'MDN Web Docs',desc:'Practical reference for HTML, CSS, JavaScript and web platform fundamentals.',url:'https://developer.mozilla.org/'},
 {title:'MIT OpenCourseWare',desc:'Free course material from MIT, useful for algorithms, systems and computer science foundations.',url:'https://ocw.mit.edu/'},
 {title:'Khan Academy Computing',desc:'Free introductory computing lessons and exercises.',url:'https://www.khanacademy.org/computing'},
 {title:'OWASP',desc:'Application security guidance and practical web security references.',url:'https://owasp.org/'},
 {title:'SQLBolt',desc:'Interactive SQL lessons and exercises for beginners.',url:'https://sqlbolt.com/'}
];

export const careerReasons=[
 ['AI is changing the work, not removing the need to explain it','Modern teams increasingly expect people to use AI while still understanding, checking and owning the result.'],
 ['Interviews expose explanation gaps','A tutorial can make a concept feel familiar. An interview asks you to reason from a blank page and handle follow-ups.'],
 ['Practice makes feedback useful','UpForge combines notes, quizzes and AI practice so you can revisit the exact area that needs work.'],
 ['Proof beats buzzwords','A project you can explain, test and improve is more useful than a long list of tools you barely used.']
];

export const interviewRounds=[
 {id:'technical-1',title:'Technical Round 1 — Foundations',desc:'Concepts, debugging, fundamentals and short reasoning questions.'},
 {id:'technical-2',title:'Technical Round 2 — Applied & Project',desc:'Project deep dive, trade-offs, architecture and follow-up questions.'}
];

export const plan={name:'UpForge Job-Ready Plan',price:49,currency:'INR',features:['Personal UpForge account','Role-based learning path','Complete notes & revision material','Quizzes with explanations','Curated learning/video resources','AI feedback on practice answers','AI interview practice','2 AI technical interview rounds','Saved progress and learning dashboard']};
