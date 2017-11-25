import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { WalletService } from '../../services/wallet.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public keyStoreFile: File = null;
  public password = '';
  public keyStoreFileName = '';
  public error = '';

  private returnUrl = '';

  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private walletService: WalletService,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => this.returnUrl = '/app/host');
  }

  onBrowseClicked(input: boolean, event: Event) {
    event.preventDefault();
    this.error = '';

    if (!input && this.keyStoreFile) {
      this.clearFile();
      return;
    }

    this.fileInput.nativeElement.click();
  }

  onFileChanged() {
    if (!this.fileInput.nativeElement.files.length) {
      this.clearFile();
      return;
    }

    this.keyStoreFile = this.fileInput.nativeElement.files[0];
    this.keyStoreFileName = this.keyStoreFile.name;
  }

  onPasswordInputKeyPressed(event: KeyboardEvent) {
    if (event.keyCode === 13) {
      event.preventDefault();
      this.onUnlockClicked();
    }
  }

  onUnlockClicked() {
    this.error = '';

    this.walletService.unlockWalletFile(this.keyStoreFile, this.password).subscribe((wallet) => {
      this.authenticationService.wallet = wallet;
      this.router.navigateByUrl(this.returnUrl);
    }, (error: Error) => {
      this.error = error.message;
    });
  }

  private clearFile() {
    this.keyStoreFile = null;
    this.keyStoreFileName = '';
    this.password = '';
    this.error = '';
  }
}
