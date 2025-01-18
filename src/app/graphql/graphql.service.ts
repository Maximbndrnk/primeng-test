import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GetUsersDocument, CreateUserDocument } from './generated/graphql';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GraphqlService {
  constructor(private apollo: Apollo) {}

  getUsers(): Observable<any> {
    return this.apollo.watchQuery({
      query: GetUsersDocument,
    }).valueChanges;
  }

  createUser(name: string, email: string, password: string): Observable<any> {
    return this.apollo.mutate({
      mutation: CreateUserDocument,
      variables: { name, email, password },
    });
  }
}
