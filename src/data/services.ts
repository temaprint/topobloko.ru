import type { CloudStorageService } from '../types';
import yandexDisk from './services/yandex-disk.json';
import googleDrive from './services/google-drive.json';
import pikpak from './services/pikpak.json';
import mega from './services/mega.json';
import box from './services/box.json';
import onedrive from './services/onedrive.json';
import nextcloud from './services/nextcloud.json';
import dropbox from './services/dropbox.json';

export const cloudServices: CloudStorageService[] = [
  pikpak,
  mega,
  box,
  onedrive,
  yandexDisk,
  googleDrive,
  nextcloud,
  dropbox
];