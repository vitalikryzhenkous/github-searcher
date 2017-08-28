import { Component } from '@angular/core';
@Component({
    selector: 'search-component',
    template: `
        <div class="search-form__container">
            <form> 
                <input class="input txt" type="text" placeholder="Will show cards with repositories, filters, and sorting." title="type here search parameters"/>
                <input class="input btn" type="submit" value="submit" title="submit button"/>
            </form>
        </div>
    `,
    styles: [`
        .search-form__container {
            margin: 50px 0;
        }
        form {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        form .input:first-child {
            flex: 10;
            margin-right: 20px;
            outline: none;
            
        }
        form .input:last-child {
            flex: 2;
        }
        input:focus.txt {
            caret-color: #2196F3;
            border: 2px solid #2196F3;
            transition: border 255ms cubic-bezier(0.0, 0.0, 0.2, 1);
        }
        .txt, .btn {
            padding: 10px;
            font-size: 16px;
        }
    `]
})
export class SearchComponent {}