import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Author } from '../../models/author/author.model';
import { AuthorService } from '../../services/author.service';


@Component({
  selector: 'app-author-form',
  templateUrl: './author-form.component.html',
  styleUrls: ['./author-form.component.css']
})
export class AuthorFormComponent implements OnInit {
  author: Author = { id: 0, firstName: '', lastName: '' };
  isEditMode: boolean = false;

  constructor(
    private authorService: AuthorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = +Number(this.route.snapshot.paramMap.get('id'))
    if (id) {
      this.isEditMode = true;
      this.authorService.getById(id).subscribe((auteur) => {
        this.author = auteur;
      });
    }
  }

  saveAuthor(): void {
    if (this.isEditMode) {
      this.authorService.update(this.author.id, this.author).subscribe(() => {
        this.router.navigate(['/authors']);
      });
    } else {
      this.authorService.create(this.author).subscribe(() => {
        this.router.navigate(['/authors']);
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/authors']);
  }
}