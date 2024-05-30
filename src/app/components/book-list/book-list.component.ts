import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../../models/book/book.model';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-livres-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[] = [];

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.bookService.getAll().subscribe(books => {
      this.books = books;
    });
  }

  addBook(): void {
    this.router.navigate(['/books/new']);
  }

  editBook(id: number): void {
    this.router.navigate(['/books', id, 'edit']);
  }

  deleteBook(id: number): void {
    this.bookService.delete(id).subscribe(() => {
      this.loadBooks(); // Refresh the list after deletion
    });
  }
}