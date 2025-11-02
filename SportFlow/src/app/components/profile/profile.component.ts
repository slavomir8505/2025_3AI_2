import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Firestore, doc, getDoc, setDoc } from '@angular/fire/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  name = '';
  address = '';
  photoURL = '';
  selectedFile: File | null = null;
  userId = '';
  loading = false;

  constructor(private auth: Auth, private firestore: Firestore) {}

  async ngOnInit() {
    const user = this.auth.currentUser;
    if (!user) return;
    this.userId = user.uid;

    // Načítaj profil z Firestore
    const userDoc = await getDoc(doc(this.firestore, 'users', this.userId));
    if (userDoc.exists()) {
      const data = userDoc.data();
      this.name = data['name'] || '';
      this.address = data['address'] || '';
      this.photoURL = data['photoURL'] || '';
    }
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    // zobrazíme náhľad obrázku
    const reader = new FileReader();
    reader.onload = (e: any) => this.photoURL = e.target.result;
    reader.readAsDataURL(this.selectedFile);
  }

  async saveProfile() {
    if (!this.userId) return;
    this.loading = true;

    let photoURL = this.photoURL;

    // Ak je vybraná fotka → nahráme ju do Storage
    if (this.selectedFile) {
      const storage = getStorage();
      const fileRef = ref(storage, `profile_pictures/${this.userId}`);
      await uploadBytes(fileRef, this.selectedFile);
      photoURL = await getDownloadURL(fileRef);
    }

    // Uloženie do Firestore
    await setDoc(doc(this.firestore, 'users', this.userId), {
      name: this.name,
      address: this.address,
      photoURL
    }, { merge: true });

    this.loading = false;
    alert('✅ Profil uložený!');
  }
}
