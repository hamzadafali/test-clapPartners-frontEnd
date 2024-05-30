import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../models/book/book.model';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  book: Book = { id: 0, title: '', price: 0, dateOfPublication: '', auteurId: 0 };
  isEditMode: boolean = false;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = +Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.isEditMode = true;
      this.bookService.getById(id).subscribe((bk) => {
        this.book = bk;
      });
    }
  }

  saveBook(): void {
    if (this.isEditMode) {
      this.bookService.update(this.book.id, this.book).subscribe(() => {
        this.router.navigate(['/books']);
      });
    } else {
      this.bookService.create(this.book).subscribe(() => {
        this.router.navigate(['/books']);
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/books']);
  }
}
