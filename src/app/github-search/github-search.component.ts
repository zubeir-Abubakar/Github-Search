import { Component, OnInit } from '@angular/core';
import { GithubRequestService } from '../githubHttp/github-request.service';
import { User } from '../user';
import {Response, Http} from '@angular/http';




@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.css']
})
export class GithubSearchComponent implements OnInit {
  user:User;
  name:string = "zubeir-Abubakar";
  reposArray;

  constructor(private githubRequestService:GithubRequestService,private http:Http) { }

  ngOnInit() {
    
    this.githubRequestService.profileRequest("zubeir-Abubakar")
    this.user = this.githubRequestService.user
    this.githubRequestService.searchRepos("zubeir-Abubakr").subscribe(result =>{
      this.reposArray = result
    })     
  }
  onSubmit(name)
  {
    if(name.trim().length != 0)
    {
      this.githubRequestService.profileRequest(name)
      this.user = this.githubRequestService.user


      this.githubRequestService.searchRepos(name).subscribe(result =>{
        this.reposArray = result
      })      
    }  
    
  }
}
