let buses = [

    {
        Bus_id : 1,
        Bus_Name :" KSRTC ",
        Src : " K.G.F ",
        Dest : "Bengaluru",
        Tickets : " 25 ",
        Tickets_avail :" 20",
        Date : " 30/3/2022 ",
        Time : "5:30 pm"
      },
    
      {
        Bus_id : 2,
        Bus_Name :" Prakruthi Travels",
        Src : " Bengaluru ",
        Dest : " Sakleshpur",
        Tickets : " 25 ",
        Tickets_avail :" 10",
        Date : " 3/4/2022 ",
        Time : "6:00 am"
      },
    
      {
        Bus_id : 3,
        Bus_Name :" Neha Travels",
        Src : " Bengaluru ",
        Dest : " Mysore",
        Tickets : " 20 ",
        Tickets_avail :" 15",
        Date : " 5/4/2022 ",
        Time : "8:30 am"
      },
    ];

    export function getBuses() {
      return buses;
    }

    export function getBus(Bus_id) {
        return buses.find(
          (bus) => bus.Bus_id === Bus_id
        );
      }