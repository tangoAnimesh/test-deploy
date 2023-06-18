import { Component, OnInit } from '@angular/core';
import { ReditApiService } from './redit-api.service';
import { decode } from 'html-entities';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public my_Obj: any = {};
  public my_List_Arr: any = [];
  public my_Final_Arr_List: any = [];

  constructor(private myServiceObj: ReditApiService) { }


  ngOnInit(): void {
    this.get__All__Data__custom();
  }

  get__All__Data__custom() {
    let data = this.myServiceObj.get_API_Data();
    data.subscribe((res: any) => {
      // console.log(res);
      this.my_Obj = res;
      // console.log(this.my_Obj.data.children);
      this.my_List_Arr = this.my_Obj.data.children;
      // console.log(this.my_List_Arr);
      this.my_Final_Arr_List = this.my_List_Arr.map((ele: any) => {
        // console.log(ele.data);
        let newObj = {
          redit_title: ele.data.title,
          redit_selftext_html: decode(ele.data.selftext_html,{level:'html5'}),
          redit_url: ele.data.url,
          redit_score: ele.data.score,
        }
        // console.log( decode(ele.data.selftext_html,{level:'html5'}));
        return newObj;

      })
      console.log(this.my_Final_Arr_List);

    })


  }


}
// <!-- Title, SelfText_HTML, URL and score -->
