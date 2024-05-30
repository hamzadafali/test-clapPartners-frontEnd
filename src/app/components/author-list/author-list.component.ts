
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Author } from '../../models/author/author.model';
import { AuthorService } from '../../services/author.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {

  authors: Author[] = [];

  constructor(private authorService: AuthorService, private router: Router) { }

  ngOnInit(): void {
    this.loadAuthor();
  }

  loadAuthor(): void {
    this.authorService.getAll().subscribe(auteurs => {
      this.authors = auteurs;
    });
  }

  addAuthor(): void {
    this.router.navigate(['/authors/new']);
  }

  editAuthor(id: number): void {
    this.router.navigate(['/authors', id, 'edit']);
  }

  deletAuthor(id: number): void {
    this.authorService.delete(id).subscribe(() => {
      this.loadAuthor(); // Refresh the list after deletion
    });
  }
}