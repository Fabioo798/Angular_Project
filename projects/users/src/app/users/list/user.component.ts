import { Component, OnInit } from '@angular/core';
import { User, repoService } from '../../home/services/register.service';

@Component({
  selector: 'sdi-user-list',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  token: string;

  constructor(private repo: repoService) {
    this.token = '';
  }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.token = token;
      this.loadUsers();
    }
  }

  loadUsers() {
    const token = localStorage.getItem('token');
    const headers = token ? { Authorization: `Bearer ${token}` } : undefined;
    this.repo.loadUsers(headers).subscribe((response: any) => {
      console.log('Users:', response.results);
      this.users = response.result;
    });
  }
}
