const workshop = [
    {
        id : 1 ,
        category : "Web Development" ,
        date : "2022-08-10" , 
        des : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." , 
        photo1 : "https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true" , 
        photo2 :"https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true" ,
        department : "Computer Science",
        faculty : [{
            fname : "Abishek" , 
            lname : "Guidekar" , 
            designation : "Asst Proff" 
        }]
    },
    {
        id : 2 ,
        category : "AI" ,
        date : "2022-08-10" , 
        des : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." , 
        photo1 : "https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true" , 
        photo2 :"https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true" ,
        department : "Computer Science",
        faculty : [{
            fname : "Dikshita" , 
            lname : "Aroskar" , 
            designation : "Asst Proff" 
        }]
    }
]

const student =  [ 
    {   s_id : 1 ,
        fname : "Ashbourn" ,
        lanme : "DCunha" ,
        year_joined : 2019 ,
        status : null ,
        department : "Computer Science",
        credits : [
            {
                eid : 1,
                subid : 2
            },
            {
                eid : 1,
                subid : 2
            },
            {
                eid : 1,
                subid : 1
            },
            {
                eid : 5
            }
        ] 
    } ,
    {   id : 2 ,
        fname : "Moses" ,
        lanme : "Crasto" ,
        year_joined : 2020 ,
        status : null ,
        department : "Computer Science",
        credits : [
            {
                eid : 4
            },
            {
                eid : 1,
                subid : 2
            },
            {
                eid : 1,
                subid : 1
            },
            {
                eid : 6
            }
        ] 
    } ,
    {   id : 3 ,
        fname : "Reeve" ,
        lanme : "Barretto" ,
        year_joined : 2022 ,
        status : null ,
        department : "Computer Science" ,
        credits : [
            {
                eid : 7
            },
            {
                eid : 1,
                subid : 2
            }
        ] 
    } 
]

const event = [
    {   
        id : 1 ,
        name :  "TechFeast" ,
        date : "2022-08-10" ,
        photo1 : "https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true" ,
        department : "Computer Science",
        type : "event" , 
        subevent : [
            {   id : 1 ,
                name : "FIFA" ,
                date : "2022-08-10" ,
                credits : 5 ,
                des : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." ,
                photo1 : "https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true" ,
                photo2 : "https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true" 
            } ,
            {   id : 2 ,
                name : "Blind Coder" ,
                date : "2022-08-10" ,
                credits : 2 ,
                des : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." ,
                photo1 : "https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true" ,
                photo2 : "https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true" 
            }
        ]
    } ,
    {   
        id : 2 ,
        name :  "IRIX" ,
        date : "2022-06-20" ,
        photo1 : "https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true" ,
        department : "Computer Science" , 
        type : "event" , 
        subevent : []
    } ,
    {   
        id : 3 ,
        name :  "Tatastu" ,
        date : "2022-06-20" ,
        photo1 : "https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true" ,
        department : "College" , 
        type : "event" , 
        subevent : []
    },
    {   
        id : 4 ,
        name : "Time Management" ,
        date : "2022-08-10" ,
        credits : 2 ,
        des : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." ,
        photo1 : "https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true" ,
        photo2 : "https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true" ,
        department : "Computer Science" , 
        type : "activity" 
    } ,
    {   
        id : 5 ,
        name : "Photography" ,
        date : "2022-08-10" ,
        credits : 2 ,
        des : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." ,
        photo1 : "https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true" ,
        photo2 : "https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true" ,
        department : "Computer Science" , 
        type : "activity" 
    } ,
    {   
        id : 6 ,
        name : "Painting" ,
        date : "2022-08-10" ,
        credits : 5 ,
        des : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." ,
        photo1 : "https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true" ,
        photo2 : "https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true" ,
        department : "Computer Science" , 
        type : "activity" 
    } ,
    {   
        id : 7 ,
        name : "Futsal" ,
        date : "2022-08-10" ,
        credits : 2 ,
        stedes : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." ,
        photo1 : "https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true" ,
        photo2 : "https://github.com/cristan02/cristan02.github.io/blob/main/Images/about.jpg?raw=true" ,
        department : "Computer Science" , 
        type : "activity" 
    }
]

//use bdsm;

db.createCollection("workshop");
db.createCollection("student");
db.createCollection("event");

db.student.find().pretty();

db.workshop.find().pretty();

db.event.find().pretty();

/* home page */
	/* to get 10 events */ 
        db.event.find(
            {
                type:"activity"
            },
            {}
        )
        .pretty()
        .sort(
            {
                date:-1
            }
        )
        .limit(10);
	/* to get 10 workshops */ 
        db.workshop.find(
            {},
            {}
        )
        .pretty()
        .sort(
            {
                date:-1
            }
        )
        .limit(10);
	/* to get all departmental non event activity */ 
        db.event.find(
            {
                type:"event"
            },
            {}
        )
        .pretty()
        .sort(
            {
                date:-1}
        )
        .limit(10);
	
    /* to get all subevents of an event */
        db.event.find(
            {
                $and : [
                    { id : 1 } , 
                    {type : "event"}
                ] 
            },
            { 
                _id : 0 , name : 1 , date:1 , department : 1 , photo1:1 , subevent : 1 , subevent :
                {
                    name : 1, credits:1 , date:1,des:1,photo1:1,photo2:1
                }
            }
        )
        .pretty();
	
    /* to get all get activity details */
        db.event.find(
            {
                $and : [
                    { 
                        id : 4 
                    } , 
                    {
                        type : "activity"
                    }
                ] 
            },
            {
                _id : 0 , name : 1 , date:1 , department : 1 , photo1:1 , photo2:1 , credits :1 , des:1 , department:1
            }
        )
        .pretty();

    /* to get all faculty who attended a partucular workshop  */
        db.workshop.find( 
            { 
                id : 1 
            }
            ,
            {
                _id : 0 , cat : 1 , date:1 , des : 1 , photo1:1 , photo2:1 , faculty :1
            }
        )
        .pretty();

        
/* events page */
	/* getting unique department name */
        db.event.distinct( 
            "department" ,
            {
                department :  
                { 
                    $ne: "College"
                }
            }
        );
	
   /* filter query */
		/* main events and their sub events */
			/* filter by date and department */
           db.event.find(
                {
                    $and : [
                        {date : 
                            {
                                $gt: new Date("2022/01/01")
                            }
                        } , 
                        {
                            date : 
                            {
                                $lt: new Date("2022/12/31")
                            }
                        } , 
                        {
                            type: "event" 
                        } , 
                        {
                            department : "Computer Science"
                        } 
                    ]
                }
            )
            .pretty();
            /* filter by date  */
            db.event.find(
                {
                    $and : [
                        {
                            date : 
                            {
                                $gt: new Date("2022/01/01")
                            }
                        } , 
                        {date : 
                            {
                                $lt: new Date("2022/12/31")
                            }
                        } , 
                        {
                            type: "event" 
                        } 
                    ]
                }
            )
            .pretty();
           
		/* activities */
			/* filter by date and department */
			db.event.find(
                {
                    $and : [
                        {
                            date : 
                            {
                                $gt: new Date("2022/01/01")
                            }
                        } , 
                        {
                            date : 
                            {
                                $lt: new Date("2022/12/31")
                            }
                        } , 
                        {type: "activity" } , 
                        {
                            department : "Computer Science"
                        } 
                    ]
                }
            )
            .pretty();
            /* filter by date  */
            db.event.find(
                {
                    $and : [
                        {
                            date : 
                            {
                                $gt: new Date("2022/01/01")
                            }
                        } , 
                        {date : 
                            {
                                $lt: new Date("2022/12/31")
                            }
                        } , 
                        {
                            type: "activity" 
                        } 
                    ]
                }
            )
            .pretty();
        /* workshops */
			/* filter by date and department */
			db.workshop.find(
                {
                    $and :[
                        {
                            date : 
                            {
                                $gt: new Date("2022/01/01")
                            }
                        } , 
                        {
                            date : 
                            {
                                $lt: new Date("2022/12/31")
                            }
                        } , 
                        {
                            "faculty.department" : "Computer Science"
                        }
                    ]
                }
            ).pretty();
            /* filter by date  */
            db.workshop.find(
                {
                    $and : [
                        {
                            date : 
                            {
                                $gt: new Date("2022/01/01")
                            }
                        } , 
                        {
                            date : 
                            {
                                $lt: new Date("2022/12/31")
                            }
                        }
                    ]
                }
            )
            .pretty();
            
        
		

/* generate letters  page */
	/* getting unique department name */
        db.event.distinct("department" , {department :  { $ne: "College" }});
		
        
	/* non event activity */
		/* montly */ 
        db.event.aggregate(
            [
              {
                $project:
                  {
                    name: "$name",
                    date: "$date",
                    credits : "$credits",
                    des : "$des",
                    photo1 : "$photo1",
                    photo2 : "$photo2",
                    department : "$department",
                    type : "$type",
                    year: { $year: "$date" },
                    month: { $month: "$date" }
                  }
              },
              { $match : { "month" : 8, "year": 2022  , type : "activity" , department : "Computer Science"} }
            ]
         )
    
    /* workshop */
        db.workshop.aggregate(
            [
            {
                $project:
                {
                    category: "$category",
                    date: "$date",
                    des : "$des",
                    photo1 : "$photo1",
                    photo2 : "$photo2",
                    faculty : "$faculty",
                    type : "$type",
                    department : "$faculty.department" ,
                    year: { $year: "$date" },
                    month: { $month: "$date" }
                }
            },
            { $match : { "month" : 8, "year": 2022 , department : "Computer Science"} }
            ]
        )     
		
    
    /* event */
        db.event.aggregate(
            [
                {
                    $project:
                    {
                        name: "$name",
                        date: "$date",
                        credits : "$credits",
                        des : "$des",
                        photo1 : "$photo1",
                        photo2 : "$photo2",
                        department : "$department",
                        type : "$type",
                        year: { $year: "$date" },
                        month: { $month: "$date" }
                    }
                },
                { 
                    $match : 
                    { 
                        "month" : 8,
                        "year": 2022  , 
                        type : "event" , 
                        department : 
                        "Computer Science"
                    } 
                }
            ]
        )
		

		

    /* departmental performance page */
        /* montly */    
            /* call montly event 12 times in a loop to get points for line graph */
            /* events */
         db.event.aggregate( [
            {
                $project:
                {

                    department : "$department",
                    month: { $month: "$date" }
                }
            },
            { 
                $match : 
                { 
                    "month" : 8,
                } 
            },
            {
               $group: {
                  _id: "$department",
                  numEvents: {
                     $count: {}
                  }
               }
            },
            {
                $sort : { _id: 1 }
            }
         ] )
         /* workshop */
         db.workshop.aggregate( [
            {
                $project:
                {

                    department : "$department",
                    month: { $month: "$date" }
                }
            },
            { 
                $match : 
                { 
                    "month" : 8,
                } 
            },
            {
               $group: {
                  _id: "$department",
                  numEvents: {
                     $count: {}
                  }
               }
            },
            {
                $sort : { _id: 1 }
            }
         ] )
            
        /* yearly */
            /* events */
            db.event.aggregate( [
                {
                    $project:
                    {
    
                        department : "$department",
                        year: { $year: "$date" }
                    }
                },
                { 
                    $match : 
                    { 
                        "year" : 2022,
                    } 
                },
                {
                   $group: {
                      _id: "$department",
                      numEvents: {
                         $count: {}
                      }
                   }
                },
                {
                    $sort : { _id: 1 }
                }
             ] )
             /* workshop */
             db.workshop.aggregate( [
                {
                    $project:
                    {
    
                        department : "$department",
                        year: { $year: "$date" }
                    }
                },
                { 
                    $match : 
                    { 
                        "year" : 2022,
                    } 
                },
                {
                   $group: {
                      _id: "$department",
                      numEvents: {
                         $count: {}
                      }
                   }
                },
                {
                    $sort : { _id: 1 }
                }
             ] )
            

    /* credit hours page */
        /* update student status */
    
        
        /* return only students who have completed all credits and status not 1*/
        db.student.aggregate( [
            {
               $lookup:
                  {
                    from: "event",
                    let: { e_id: "$credits.eid", sub_id: "$credits.subid" },
                    pipeline: [
                       { $match:
                          { $expr:
                             { $or:
                                [
                                    {
                                        $and : 
                                        [
                                            { $eq: [ "$id",  "$$e_id" ] },
                                            { type: "event" }
                                        ] 
                                    } ,
                                    { 
                                        $and : 
                                        [
                                            { $eq: [ "$id",  "$$e_id" ] },
                                            { type: "activity" },
                                            { $eq: [ "$subevent.id", "$$sub_id" ] }
                                        ] 
                                    }
                                ]
                             }
                          }
                       },
                    ],
                    as: "stockdata"
                  }
             }
         ] )

    //credits
        //get all students who have more the 120 credits     
        // long
         db.student.aggregate( [
            {
               $lookup: {
                  from: "event",
                  localField: "credits.eid",   
                  foreignField: "id",  
                  pipeline : [
                    { 
                        $unwind: 
                        { 
                            path: "$subevent",
                            preserveNullAndEmptyArrays: true 
                        } 
                    },
                    {
                        $project : 
                        {
                            _id : 0 ,
                            id : 0 , 
                            department : 0,
                            type:0,
                            date : 0 ,
                            des: 0,
                            stedes : 0,
                            photo1 : 0,
                            photo2:0 ,
                            subevent : { 
                                id: 0 ,
                                date : 0 ,
                                des: 0,
                                photo1 : 0,
                                photo2:0
                            },
                        }
                    }
                  ],
                  as: 'participated'
               },
               
            },
            { 
                $unwind: 
                { 
                    path: "$participated",
                    preserveNullAndEmptyArrays: true 
                } 
            },
            {
                $sort:{ fname : 1 }
            },
            {
                $group:
                  {
                    _id : "$fname",
                    sumevents : { $sum : "$participated.credits"} ,
                    sumactivity : { $sum : "$participated.subevent.credits"} 
                  }
            },
            {
                $set : {
                    tot_credits : { $sum: ["$sumevents" , "$sumactivity"] }
                }
            },
            {
                $sort : {tot_credits : -1}
            },  
            {
              $match: { tot_credits : { $gte: 10 } }
            }
         ] );
        // short 
        db.student.aggregate( [
            {
               $lookup: {
                  from: "event",
                  localField: "credits.eid",   
                  foreignField: "id",  
                  pipeline : [
                    { 
                        $unwind: 
                        { 
                            path: "$subevent",
                            preserveNullAndEmptyArrays: true 
                        } 
                    }
                  ],
                  as: 'participated'
               },
               
            },
            { 
                $unwind: 
                { 
                    path: "$participated",
                    preserveNullAndEmptyArrays: true 
                } 
            },
            {
                $sort:{ fname : 1 }
            },
            {
                $group:
                  {
                    _id : "$fname",
                    sumevents : { $sum : "$participated.credits"} ,
                    sumactivity : { $sum : "$participated.subevent.credits"} 
                  }
            },
            {
                $set : {
                    tot_credits : { $sum: ["$sumevents" , "$sumactivity"] }
                }
            },
            {
                $sort : {tot_credits : -1}
            },  
            {
              $match: { tot_credits : { $gte: 10 } }
            }
         ] );
        



       // activities and events names attended by students
        db.student.aggregate( [
            {
               $lookup: {
                  from: "event",
                  localField: "credits.eid",   
                  foreignField: "id",  
                  pipeline : [
                    { 
                        $unwind: 
                        { 
                            path: "$subevent",
                            preserveNullAndEmptyArrays: true 
                        } 
                    },
                    {
                        $project : 
                        {
                            _id : 0 ,
                            id : 0 , 
                            department : 0,
                            type:0,
                            date : 0 ,
                            des: 0,
                            stedes : 0,
                            photo1 : 0,
                            photo2:0 ,
                            subevent : { 
                                id: 0 ,
                                date : 0 ,
                                des: 0,
                                photo1 : 0,
                                photo2:0
                            },
                        }
                    }
                  ],
                  as: 'participated'
               },
               
            },
            {
                $project : {
                    id : 0 , 
                    year_joined : 0 ,
                    status : 0,
                    department : 0 ,
                    credits : 0
                }
            },
            {
                $sort : {fname : 1}
            }     
         ] ).pretty();

        // activities and events names attended by particular student
        db.student.aggregate( [
            {
               $lookup: {
                  from: "event",
                  localField: "credits.eid",   
                  foreignField: "id",  
                  pipeline : [
                    { 
                        $unwind: 
                        { 
                            path: "$subevent",
                            preserveNullAndEmptyArrays: true 
                        } 
                    },
                    {
                        $project : 
                        {
                            _id : 0 ,
                            id : 0 , 
                            department : 0,
                            type:0,
                            date : 0 ,
                            des: 0,
                            stedes : 0,
                            photo1 : 0,
                            photo2:0 ,
                            subevent : { 
                                id: 0 ,
                                date : 0 ,
                                des: 0,
                                photo1 : 0,
                                photo2:0
                            },
                        }
                    }
                  ],
                  as: 'participated'
               },
               
            },
            {
                $project : {
                    id : 0 , 
                    year_joined : 0 ,
                    status : 0,
                    department : 0 ,
                    credits : 0
                }
            },
            {
                $match : {fname : "Moses"}
            } 
         ] ).pretty();



         //////



        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
         db.student.aggregate( [
            {
               $lookup: {
                  from: "event",
                  localField: "credits.eid",   
                  foreignField: "id",  
                  pipeline : [
                    { 
                        $unwind: 
                        { 
                            path: "$subevent",
                            preserveNullAndEmptyArrays: true 
                        } 
                    }
                  ],
                  as: 'participated'
               },
               
            },
            { 
                $unwind: 
                { 
                    path: "$participated",
                    preserveNullAndEmptyArrays: true 
                } 
            },
            {
                $sort:{ fname : 1 }
            },
            {
                $group:
                  {
                    _id : "$fname",
                    sumevents : { $sum : "$participated.credits"} ,
                    sumactivity : { $sum : "$participated.subevent.credits"} 
                  }
            },
            {
                $set : {
                    tot_credits : { $sum: ["$sumevents" , "$sumactivity"] }
                }
            },
            {
                $sort : {tot_credits : -1}
            },  
            {
              $match: { tot_credits : { $gte: 10 } }
            }
         ] );