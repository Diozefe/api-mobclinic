import "reflect-metadata";

import { application } from "./config/config_express";

application.listen(3000, ()=>{
    console.log('Server Status: Online | Port: 3000');
});
