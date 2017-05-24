import { Component } from '@angular/core';
import { postService } from '../services/post.service'

@Component({
    moduleId :module.id,
    selector: 'user',
    templateUrl: `user.component.html`,
    providers:[postService]
})

export class UserComponent {
    name: String;
    email: String;
    address: address;
    hobbies: String[];
    showHobbies: boolean;
    posts:Posts[];

    constructor(private postService : postService) {
        this.name = 'Shafaqat Khan';
        this.email = 'k.shafaqat@yahoo.com';
        this.address = {
            street: 'Road NO.6',
            city: 'Mumbai',
            state: 'Maharashtra'
        };
        this.hobbies = ['Music', 'Cricket', 'Reading', 'Movie'];
        this.showHobbies = false;

        this.postService.getPost().subscribe(posts => {
            this.posts = posts;
        });
    }

    toggleHobbies(){
        if(this.showHobbies){
              this.showHobbies=false;
        }
        else{
            this.showHobbies=true;
        }
    }
    addHobby(hobby:String){
        this.hobbies.push(hobby);
    }
    deleteHobbie(i:number){
        this.hobbies.splice(i,1);
    }
}

interface address {
    street: String;
    city: String;
    state: string;
}

interface Posts{
    id : number;
    title : String;
    body : String;
}

