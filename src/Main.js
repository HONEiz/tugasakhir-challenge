import { UploadOutlined } from '@ant-design/icons';
import { Button, Space, Upload } from 'antd';
import { useState } from 'react';
import { read, utils } from 'xlsx';
import { Table, Select } from "antd";



const Main = () => {
    const [datas, setDatas] = useState({});
    const [dataChosen, setDataChosen] = useState('A1A');

    const tableColumns = {
        A1A: [
            {
                title: 'No',
                width: 65,
                dataIndex: 'no',
                key: 'no',
                fixed: 'left'
            },
            {
                title: 'Kategori Kegiatan',
                dataIndex: 'kategoriKegiatan',
                key: 'kategoriKegiatan'
            },
            {
                title: 'Mata Kuliah',
                children: [
                    {
                        title: 'Kode',
                        dataIndex: 'kode',
                        key: 'kode',
                    },
                    {
                        title: 'Nama',
                        dataIndex: 'nama',
                        key: 'nama',
                    },
                    {
                        title: 'Program Studi',
                        dataIndex: 'prodi',
                        key: 'prodi',
                    },
                    {
                        title: 'Jenis Pertemuan',
                        dataIndex: 'jnsPertemuan',
                        key: 'jnsPertemuan',
                    },
                    {
                        title: 'Jenis Penugasan',
                        dataIndex: 'jnsPenugasan',
                        key: 'jnsPenugasan',
                    }
                ]
            },
            {
                title: 'Data SIAKAD',
                children: [
                    {
                        title: 'sks Mata Kuliah',
                        dataIndex: 'sksMKSIAKAD',
                        key: 'sksMKSIAKAD',
                    },
                    {
                        title: 'Kelas',
                        dataIndex: 'klsSIAKAD',
                        key: 'klsSIAKAD',
                    },
                    {
                        title: 'J. Mhs.',
                        dataIndex: 'jmlMhsSIAKAD',
                        key: 'jmlMhsSIAKAD',
                    },
                    {
                        title: 'J. Dosen',
                        dataIndex: 'jmlDosenSIAKAD',
                        key: 'jmlDosenSIAKAD',
                    },
                    {
                        title: 'Rencana Beban sks',
                        dataIndex: 'rencanaBebanSKS',
                        key: 'rencanaBebanSKS',
                    }
                ]
            },
            {
                title: 'Data Lecturer Portal (Realisasi)',
                children: [
                    {
                        title: '% terhadap sks mata kuliah',
                        dataIndex: 'persenSKSMK',
                        key: 'persenSKSMK',
                    },
                    {
                        title: '% terhadap rencana bebean',
                        dataIndex: 'persenRencanaBeban',
                        key: 'persenRencanaBeban',
                    },
                    {
                        title: 'sks realisasi',
                        dataIndex: 'sksRealisasi',
                        key: 'sksRealisasi',
                    },
                ]
            },
            {
                title: 'sks BKD (Dikti)',
                dataIndex: 'sksBKD',
                key: 'sksBKD',
            },
            {
                title: 'Angka Kredit (JFAD)',
                dataIndex: 'angkaKredit',
                key: 'angkaKredit',
            }
        ],
        A1B: [
            {
                title: 'No',
                width: 65,
                dataIndex: 'no',
                key: 'no',
                fixed: 'left'
            },
            {
                title: 'Kategori Kegiatan',
                dataIndex: 'kategoriKegiatan',
                key: 'kategoriKegiatan'
            },
            {
                title: 'Mata Kuliah',
                children: [
                    {
                        title: 'Kode',
                        dataIndex: 'kode',
                        key: 'kode',
                    },
                    {
                        title: 'Nama',
                        dataIndex: 'nama',
                        key: 'nama',
                    },
                    {
                        title: 'Program Studi',
                        dataIndex: 'prodi',
                        key: 'prodi',
                    },
                ]
            },
            {
                title: 'Jumlah Dosen',
                dataIndex: 'jmlDosen',
                key: 'jmlDosen',
            },
            {
                title: 'Keterangan Lain',
                dataIndex: 'ketLain',
                key: 'ketLain',
            },
            {
                title: 'Validasi',
                dataIndex: 'validasi',
                key: 'validasi',
            },
            {
                title: 'sks UNPAR',
                dataIndex: 'sksUNPAR',
                key: 'sksUNPAR',
            },
            {
                title: 'Validasi Sistem / Alasan',
                dataIndex: 'validasiSistem',
                key: 'validasiSistem',
            },
            {
                title: 'sks BKD (dikti)',
                dataIndex: 'sksBKD',
                key: 'sksBKD',
            },
            {
                title: 'Angka Kredit (JFAD)',
                dataIndex: 'angkaKredit',
                key: 'angkaKredit',
            }
        ],
        A2: [
            {
                title: 'No',
                width: 65,
                dataIndex: 'no',
                key: 'no',
                fixed: 'left'
            },
            {
                title: 'Kategori Kegiatan (Jenis Bimbingan)',
                dataIndex: 'kategoriKegiatan',
                key: 'kategoriKegiatan'
            },

            {
                title: 'Jumlah Mahasiswa / Kelas',
                dataIndex: 'jmlMhsPerKls',
                key: 'jmlMhsPerKls',
            },
            {
                title: 'Jenis Pembimbing',
                dataIndex: 'jnsPembimbing',
                key: 'jnsPembimbing',
            },
            {
                title: 'Keterangan Lain / URL Bukti',
                dataIndex: 'ketLain',
                key: 'ketLain',
            },
            {
                title: 'Validasi',
                dataIndex: 'validasi',
                key: 'validasi',
            },
            {
                title: 'sks UNPAR',
                dataIndex: 'sksUNPAR',
                key: 'sksUNPAR',
            },
            {
                title: 'Validasi Sistem / Alasan',
                dataIndex: 'validasiSistem',
                key: 'validasiSistem',
            },
            {
                title: 'sks BKD (dikti)',
                dataIndex: 'sksBKD',
                key: 'sksBKD',
            },
            {
                title: 'Angka Kredit (JFAD)',
                dataIndex: 'angkaKredit',
                key: 'angkaKredit',
            }
        ],
        A3: [
            {
                title: 'No',
                width: 65,
                dataIndex: 'no',
                key: 'no',
                fixed: 'left'
            },
            {
                title: 'Kategori Kegiatan (Jenis Pengujian)',
                dataIndex: 'kategoriKegiatan',
                key: 'kategoriKegiatan'
            },

            {
                title: 'Jumlah Mhs.',
                dataIndex: 'jmlMhs',
                key: 'jmlMhs',
            },
            {
                title: 'Jenis Penguji (pembimbing bukanlah ketua penguji)',
                dataIndex: 'jnsPenguji',
                key: 'jnsPenguji',
            },
            {
                title: 'Keterangan Lain / URL Bukti',
                dataIndex: 'ketLain',
                key: 'ketLain',
            },
            {
                title: 'Validasi',
                dataIndex: 'validasi',
                key: 'validasi',
            },
            {
                title: 'sks UNPAR',
                dataIndex: 'sksUNPAR',
                key: 'sksUNPAR',
            },
            {
                title: 'Validasi Sistem / Alasan',
                dataIndex: 'validasiSistem',
                key: 'validasiSistem',
            },
            {
                title: 'sks BKD (dikti)',
                dataIndex: 'sksBKD',
                key: 'sksBKD',
            },
            {
                title: 'Angka Kredit (JFAD)',
                dataIndex: 'angkaKredit',
                key: 'angkaKredit',
            }
        ],
        A4: [
            {
                title: 'No',
                width: 65,
                dataIndex: 'no',
                key: 'no',
                fixed: 'left'
            },
            {
                title: 'Kategori Kegiatan',
                dataIndex: 'kategoriKegiatan',
                key: 'kategoriKegiatan'
            },

            {
                title: 'Jumlah Mhs.',
                dataIndex: 'jmlMhs',
                key: 'jmlMhs',
            },
            {
                title: 'Nama Kegiatan',
                dataIndex: 'namaKegiatan',
                key: 'namaKegiatan',
            },
            {
                title: 'Jenjang',
                dataIndex: 'jenjang',
                key: 'jenjang',
            },
            {
                title: 'Keterangan Lain / URL Bukti',
                dataIndex: 'ketLain',
                key: 'ketLain',
            },
            {
                title: 'Validasi',
                dataIndex: 'validasi',
                key: 'validasi',
            },
            {
                title: 'sks UNPAR',
                dataIndex: 'sksUNPAR',
                key: 'sksUNPAR',
            },
            {
                title: 'Validasi Sistem / Alasan',
                dataIndex: 'validasiSistem',
                key: 'validasiSistem',
            },
            {
                title: 'sks BKD (dikti)',
                dataIndex: 'sksBKD',
                key: 'sksBKD',
            },
            {
                title: 'Angka Kredit (JFAD)',
                dataIndex: 'angkaKredit',
                key: 'angkaKredit',
            }
        ],
        A5: [
            {
                title: 'No',
                dataIndex: 'no',
                key: 'no',
                fixed: 'left',
                width: 65,
            },
            {
                title: 'Kategori Kegiatan',
                dataIndex: 'kategoriKegiatan',
                key: 'kategoriKegiatan'
            },
            {
                title: 'Nama / Deskripsi Pengembangan',
                dataIndex: 'namaPengembangan',
                key: 'namaPengembangan',
            },
            {
                title: 'Keterangan Lain / URL Bukti',
                dataIndex: 'ketLain',
                key: 'ketLain',
            },
            {
                title: 'Validasi',
                dataIndex: 'validasi',
                key: 'validasi',
            },
            {
                title: 'sks (UNPAR)',
                dataIndex: 'sksUNPAR',
                key: 'sksUNPAR',
            },
            {
                title: 'Validasi Sistem / Alasan',
                dataIndex: 'validasiSistem',
                key: 'validasiSistem',
            },
            {
                title: 'sks BKD (dikti)',
                dataIndex: 'sksBKD',
                key: 'sksBKD',
            },
            {
                title: 'Angka Kredit (JFAD)',
                dataIndex: 'angkaKredit',
                key: 'angkaKredit',
            }
        ],
        A6: [
            {
                title: 'No',
                dataIndex: 'no',
                key: 'no',
                fixed: 'left',
                width: 65,
            },
            {
                title: 'Judul Orasi',
                dataIndex: 'jdlOrasi',
                key: 'jdlOrasi'
            },
            {
                title: 'Tingkat',
                dataIndex: 'tingkat',
                key: 'tingkat',
            },
            {
                title: 'Keterangan Lain / URL Bukti',
                dataIndex: 'ketLain',
                key: 'ketLain',
            },
            {
                title: 'Validasi',
                dataIndex: 'validasi',
                key: 'validasi',
            },
            {
                title: 'sks (UNPAR)',
                dataIndex: 'sksUNPAR',
                key: 'sksUNPAR',
            },
            {
                title: 'Validasi Sistem / Alasan',
                dataIndex: 'validasiSistem',
                key: 'validasiSistem',
            },
            {
                title: 'sks BKD (dikti)',
                dataIndex: 'sksBKD',
                key: 'sksBKD',
            },
            {
                title: 'Angka Kredit (JFAD)',
                dataIndex: 'angkaKredit',
                key: 'angkaKredit',
            }
        ],
        A7: [
            {
                title: 'No',
                dataIndex: 'no',
                key: 'no',
                fixed: 'left',
                width: 65,
            },
            {
                title: 'Kategori Kegiatan',
                dataIndex: 'kategoriKegiatan',
                key: 'kategoriKegiatan'
            },
            {
                title: 'Deskripsi',
                dataIndex: 'desk',
                key: 'desk',
            },
            {
                title: 'Keterangan Lain',
                dataIndex: 'ketLain',
                key: 'ketLain',
            },
            {
                title: 'sks (UNPAR)',
                dataIndex: 'sksUNPAR',
                key: 'sksUNPAR',
            },
            {
                title: 'sks BKD (dikti)',
                dataIndex: 'sksBKD',
                key: 'sksBKD',
            },
            {
                title: 'Angka Kredit (JFAD)',
                dataIndex: 'angkaKredit',
                key: 'angkaKredit',
            }
        ],
        A8: [
            {
                title: 'No',
                dataIndex: 'no',
                key: 'no',
                fixed: 'left',
                width: 65,
            },
            {
                title: 'Kategori Kegiatan',
                dataIndex: 'kategoriKegiatan',
                key: 'kategoriKegiatan'
            },
            {
                title: 'Dosen yang dibimbing',
                children: [
                    {
                        title: 'NIK',
                        dataIndex: 'nik',
                        key: 'nik',
                    },
                    {
                        title: 'Nama',
                        dataIndex: 'nama',
                        key: 'nama',
                    }
                ]
            },
            {
                title: 'Jabatan Fungsional Dosen yang dibimbing',
                dataIndex: 'jabatanFungsional',
                key: 'jabatanFungsional',
            },
            {
                title: 'Keterangan Lain / URL Bukti',
                dataIndex: 'ketLain',
                key: 'ketLain',
            },
            {
                title: 'Validasi',
                dataIndex: 'validasi',
                key: 'validasi',
            },
            {
                title: 'sks (UNPAR)',
                dataIndex: 'sksUNPAR',
                key: 'sksUNPAR',
            },
            {
                title: 'Validasi Sistem / Alasan',
                dataIndex: 'validasiSistem',
                key: 'validasiSistem',
            },
            {
                title: 'sks BKD (dikti)',
                dataIndex: 'sksBKD',
                key: 'sksBKD',
            },
            {
                title: 'Angka Kredit (JFAD)',
                dataIndex: 'angkaKredit',
                key: 'angkaKredit',
            }
        ],
        A9: [
            {
                title: 'No',
                dataIndex: 'no',
                key: 'no',
                fixed: 'left',
                width: 65,
            },
            {
                title: 'Kategori Kegiatan',
                dataIndex: 'kategoriKegiatan',
                key: 'kategoriKegiatan'
            },
            {
                title: 'Deskripsi Kegiatan',
                dataIndex: 'deskKegiatan',
                key: 'deskKegiatan',
            },
            {
                title: 'Skala Institusi',
                dataIndex: 'skala',
                key: 'skala',
            },
            {
                title: 'Keterangan Lain / URL Bukti',
                dataIndex: 'ketLain',
                key: 'ketLain',
            },
            {
                title: 'Validasi',
                dataIndex: 'validasi',
                key: 'validasi',
            },
            {
                title: 'sks (UNPAR)',
                dataIndex: 'sksUNPAR',
                key: 'sksUNPAR',
            },
            {
                title: 'Validasi Sistem / Alasan',
                dataIndex: 'validasiSistem',
                key: 'validasiSistem',
            },
            {
                title: 'sks BKD (dikti)',
                dataIndex: 'sksBKD',
                key: 'sksBKD',
            },
            {
                title: 'Angka Kredit (JFAD)',
                dataIndex: 'angkaKredit',
                key: 'angkaKredit',
            }
        ],
        A10: [
            {
                title: 'No',
                width: 65,
                dataIndex: 'no',
                key: 'no',
                fixed: 'left'
            },
            {
                title: 'Kategori Kegiatan (Jenis Output)',
                dataIndex: 'kategoriKegiatan',
                key: 'kategoriKegiatan'
            },

            {
                title: 'Jumlah Mhs.',
                dataIndex: 'jmlMhs',
                key: 'jmlMhs',
            },
            {
                title: 'Jenis Pendampingan',
                dataIndex: 'jnsPendampingan',
                key: 'jnsPendampingan',
            },
            {
                title: 'Nama Kegiatan',
                dataIndex: 'namaKegiatan',
                key: 'namaKegiatan',
            },
            {
                title: 'Keterangan Lain / URL Bukti',
                dataIndex: 'ketLain',
                key: 'ketLain',
            },
            {
                title: 'Validasi',
                dataIndex: 'validasi',
                key: 'validasi',
            },
            {
                title: 'sks (UNPAR)',
                dataIndex: 'sksUNPAR',
                key: 'sksUNPAR',
            },
            {
                title: 'Validasi Sistem / Alasan',
                dataIndex: 'validasiSistem',
                key: 'validasiSistem',
            },
            {
                title: 'sks BKD (dikti)',
                dataIndex: 'sksBKD',
                key: 'sksBKD',
            },
            {
                title: 'Angka Kredit (JFAD)',
                dataIndex: 'angkaKredit',
                key: 'angkaKredit',
            }
        ],
        A11: [
            {
                title: 'No',
                dataIndex: 'no',
                key: 'no',
                fixed: 'left',
                width: 65,
            },
            {
                title: 'Kategori Kegiatan',
                dataIndex: 'kategoriKegiatan',
                key: 'kategoriKegiatan'
            },
            {
                title: 'Nama Kegiatan',
                dataIndex: 'namaKegiatan',
                key: 'namaKegiatan',
            },
            {
                title: 'Sub Kategori Kegiatan',
                dataIndex: 'subKategoriKegiatan',
                key: 'subKategoriKegiatan',
            },
            {
                title: 'Keterangan Lain / URL Bukti',
                dataIndex: 'ketLain',
                key: 'ketLain',
            },
            {
                title: 'Validasi',
                dataIndex: 'validasi',
                key: 'validasi',
            },
            {
                title: 'sks (UNPAR)',
                dataIndex: 'sksUNPAR',
                key: 'sksUNPAR',
            },
            {
                title: 'Validasi Sistem / Alasan',
                dataIndex: 'validasiSistem',
                key: 'validasiSistem',
            },
            {
                title: 'sks BKD (dikti)',
                dataIndex: 'sksBKD',
                key: 'sksBKD',
            },
            {
                title: 'Angka Kredit (JFAD)',
                dataIndex: 'angkaKredit',
                key: 'angkaKredit',
            }
        ]

    }


    const getDataA1A = async (rawData) => {
        const hasil = [];
        const tempA1A = rawData.A1A;

        for (let i = 1; i < tempA1A.length; i++) {
            hasil.push({
                key:i,
                no: tempA1A[i][1],
                kategoriKegiatan: tempA1A[i][2],
                kode: tempA1A[i][5],
                nama: tempA1A[i][6],
                prodi: tempA1A[i][11],
                jnsPertemuan: tempA1A[i][13],
                jnsPenugasan: tempA1A[i][14],
                sksMKSIAKAD: tempA1A[i][15],
                klsSIAKAD: tempA1A[i][16],
                jmlMhsSIAKAD: tempA1A[i][17],
                jmlDosenSIAKAD: tempA1A[i][18],
                rencanaBebanSKS: tempA1A[i][19],
                persenSKSMK: tempA1A[i][20],
                persenRencanaBeban: tempA1A[i][21],
                sksRealisasi: tempA1A[i][22],
                sksBKD: tempA1A[i][23],
                angkaKredit: tempA1A[i][24],
            })
        }
        return hasil;
    }

    const getDataA1B = async (rawData) => {
        const hasil = [];
        const tempA1B = rawData.A1B;

        for (let i = 1; i < tempA1B.length; i++) {
            hasil.push({
                key:i,
                no: tempA1B[i][1],
                kategoriKegiatan: tempA1B[i][2],
                kode: tempA1B[i][5],
                nama: tempA1B[i][6],
                prodi: tempA1B[i][11],
                jmlDosen: tempA1B[i][13],
                ketLain: tempA1B[i][14],
                validasi: tempA1B[i][16],
                sksUNPAR: tempA1B[i][19],
                validasiSistem: tempA1B[i][20],
                sksBKD: tempA1B[i][21],
                angkaKredit: tempA1B[i][22],
            })
        }
        return hasil;
    }

    const getDataA2 = async (rawData) => {
        const hasil = [];
        const tempA2 = rawData.A2;

        for (let i = 1; i < tempA2.length; i++) {
            hasil.push({
                key:i,
                no: tempA2[i][1],
                kategoriKegiatan: tempA2[i][2],
                jmlMhsPerKls: tempA2[i][5],
                jnsPembimbing: tempA2[i][6],
                ketLain: tempA2[i][9],
                validasi: tempA2[i][14],
                sksUNPAR: tempA2[i][17],
                validasiSistem: tempA2[i][18],
                sksBKD: tempA2[i][19],
                angkaKredit: tempA2[i][20],
            })
        }
        return hasil;
    }

    const getDataA3 = async (rawData) => {
        const hasil = [];
        const temp = rawData.A3;

        for (let i = 1; i < temp.length; i++) {
            hasil.push({
                key:i,
                no: temp[i][1],
                kategoriKegiatan: temp[i][2],
                jmlMhs: temp[i][5],
                jnsPenguji: temp[i][6],
                ketLain: temp[i][9],
                validasi: temp[i][14],
                sksUNPAR: temp[i][17],
                validasiSistem: temp[i][18],
                sksBKD: temp[i][19],
                angkaKredit: temp[i][20]
            })
        }
        return hasil;
    }

    const getDataA4 = async (rawData) => {
        const hasil = [];
        const temp = rawData.A4;

        for (let i = 1; i < temp.length; i++) {
            hasil.push({
                key:i,
                no: temp[i][1],
                kategoriKegiatan: temp[i][2],
                jmlMhs: temp[i][5],
                namaKegiatan: temp[i][6],
                jenjang: temp[i][9],
                ketLain: temp[i][10],
                validasi: temp[i][14],
                sksUNPAR: temp[i][17],
                validasiSistem: temp[i][18],
                sksBKD: temp[i][19],
                angkaKredit: temp[i][20],
            })
        }
        return hasil;
    }

    const getDataA5 = async (rawData) => {
        const hasil = [];
        const temp = rawData.A5;

        for (let i = 1; i < temp.length; i++) {
            hasil.push({
                key:i,
                no: temp[i][1],
                kategoriKegiatan: temp[i][2],
                namaPengembangan: temp[i][5],
                ketLain: temp[i][10],
                validasi: temp[i][14],
                sksUNPAR: temp[i][17],
                validasiSistem: temp[i][18],
                sksBKD: temp[i][19],
                angkaKredit: temp[i][20],
            })
        }
        return hasil;
    }

    const getDataA6 = async (rawData) => {
        const hasil = [];
        const temp = rawData.A6;

        for (let i = 1; i < temp.length; i++) {
            hasil.push({
                key:i,
                no: temp[i][1],
                jdlOrasi: temp[i][2],
                tingkat: temp[i][8],
                ketLain: temp[i][10],
                validasi: temp[i][14],
                sksUNPAR: temp[i][17],
                validasiSistem: temp[i][18],
                sksBKD: temp[i][19],
                angkaKredit: temp[i][20],
            })
        }
        return hasil;
    }


    const getDataA7 = async (rawData) => {
        const hasil = [];
        const temp = rawData.A7;


        hasil.push({
            key:1,
            no: temp[1],
            kategoriKegiatan: temp[2],
            desk: temp[5],
            ketLain: temp[11],
            sksUNPAR: temp[17],
            sksBKD: temp[19],
            angkaKredit: temp[20],
        })
        return hasil;
    }

    const getDataA8 = async (rawData) => {
        const hasil = [];
        const temp = rawData.A8;

        for (let i = 1; i < temp.length; i++) {
            hasil.push({
                
                key:i,
                no: temp[i][1],
                kategoriKegiatan: temp[i][2],
                nik: temp[i][5],
                nama: temp[i][6],
                jabatanFungsional: temp[i][10],
                ketLain: temp[i][12],
                validasi: temp[i][14],
                sksUNPAR: temp[i][17],
                validasiSistem: temp[i][18],
                sksBKD: temp[i][19],
                angkaKredit: temp[i][20],
            })
        }
        return hasil;
    }

    const getDataA9 = async (rawData) => {
        const hasil = [];
        const temp = rawData.A9;

        for (let i = 1; i < temp.length; i++) {
            hasil.push({
                key:i,
                no: temp[i][1],
                kategoriKegiatan: temp[i][2],
                deskKegiatan: temp[i][5],
                skala: temp[i][9],
                ketLain: temp[i][11],
                validasi: temp[i][14],
                sksUNPAR: temp[i][17],
                validasiSistem: temp[i][18],
                sksBKD: temp[i][19],
                angkaKredit: temp[i][20],
            })
        }
        return hasil;
    }

    const getDataA10 = async (rawData) => {
        const hasil = [];
        const temp = rawData.A10;

        for (let i = 1; i < temp.length; i++) {
            hasil.push({
                key:i,
                no: temp[i][1],
                kategoriKegiatan: temp[i][2],
                jmlMhs: temp[i][5],
                jnsPendampingan: temp[i][6],
                namaKegiatan: temp[i][8],
                ketLain: temp[i][12],
                validasi: temp[i][14],
                sksUNPAR: temp[i][17],
                validasiSistem: temp[i][18],
                sksBKD: temp[i][19],
                angkaKredit: temp[i][20],
            })
        }
        return hasil;
    }

    const getDataA11 = async (rawData) => {
        const hasil = [];
        const temp = rawData.A11;

        for (let i = 1; i < temp.length; i++) {
            hasil.push({
                key:i,
                no: temp[i][1],
                kategoriKegiatan: temp[i][2],
                namaKegiatan: temp[i][5],
                subKategoriKegiatan: temp[i][8],
                ketLain: temp[i][11],
                validasi: temp[i][14],
                sksUNPAR: temp[i][17],
                validasiSistem: temp[i][18],
                sksBKD: temp[i][19],
                angkaKredit: temp[i][20],
            })
        }
        return hasil;
    }

    const handleUpload = async (file) => {
        const ab = await file.arrayBuffer();
        const wb = read(ab);
        const ws = wb.Sheets[wb.SheetNames[0]];

        const data = utils.sheet_to_json(ws, { header: 1 });

        let tempData = {
            // A1A
            A1A: data.slice(12, 38),
            // A1B
            A1B: data.slice(42, 53),
            // A2
            A2: data.slice(59, 74),
            // A3
            A3: data.slice(80, 96),
            // A4
            A4: data.slice(101, 117),
            // A5
            A5: data.slice(122, 137),
            // A6
            A6: data.slice(143, 149),
            // A7
            A7: data[153],
            // A8
            A8: data.slice(159, 165),
            // A9
            A9: data.slice(170, 174),
            //A10
            A10: data.slice(179, 185),
            //A11
            A11: data.slice(190, 201),
        };

        const dataA1A = await getDataA1A(tempData)
        const dataA1B = await getDataA1B(tempData)
        const dataA2 = await getDataA2(tempData)
        const dataA3 = await getDataA3(tempData)
        const dataA4 = await getDataA4(tempData)
        const dataA5 = await getDataA5(tempData)
        const dataA6 = await getDataA6(tempData)
        const dataA7 = await getDataA7(tempData)
        const dataA8 = await getDataA8(tempData)
        const dataA9 = await getDataA9(tempData)
        const dataA10 = await getDataA10(tempData)
        const dataA11 = await getDataA11(tempData)

        const finalData = {
            A1A: dataA1A,
            A1B: dataA1B,
            A2: dataA2,
            A3: dataA3,
            A4: dataA4,
            A5: dataA5,
            A6: dataA6,
            A7: dataA7,
            A8: dataA8,
            A9: dataA9,
            A10: dataA10,
            A11: dataA11
        }

        setDatas(finalData);

        return false;
    };

    return (
        <>
            <Space
                direction="horizontal"
                style={{
                    width: ''
                }}
                size="large"
            >
                <Upload
                    action="https://localhost:3000/"
                    listType="text"
                    maxCount={1}
                    accept='.xlsx'
                    beforeUpload={handleUpload}
                    showUploadList={{showRemoveIcon:false}}
                >
                    <Button icon={<UploadOutlined />}>Upload di sini</Button>
                </Upload>
            </Space>

            <div id='Laporan'>
                <p>Pilih data : </p>
                <Select
                    defaultValue="A1A"
                    style={{
                        width: 300,
                    }}
                    onChange={(value) => {
                        setDataChosen(value);
                    }}
                    options={[
                        {
                            value: 'A1A',
                            label: 'A1A (Perkuliahan)',
                        },
                        {
                            value: 'A1B',
                            label: 'A1B (Koordinator)',
                        },
                        {
                            value: 'A2',
                            label: 'A2 (Bimbingan)',
                        },
                        {
                            value: 'A3',
                            label: 'A3 (Penguji)',
                        },
                        {
                            value: 'A4',
                            label: 'A4 (Pembinaan Mahasiswa)',
                        },
                        {
                            value: 'A5',
                            label: 'A5 (Pengembangan Kuliah)',
                        },
                        {
                            value: 'A6',
                            label: 'A6 (Orasi Ilmiah)',
                        },
                        {
                            value: 'A7',
                            label: 'A7 (Jabatan Struktural)',
                        },
                        {
                            value: 'A8',
                            label: 'A8 (Membimbing Dosen)',
                        },
                        {
                            value: 'A9',
                            label: 'A9 (Detasering & Pencangkokan)',
                        },
                        {
                            value: 'A10',
                            label: 'A10 (Pendampingan Mhs. Luar Inst.)',
                        },
                        {
                            value: 'A11',
                            label: 'A11 (Pengembangan Diri)',
                        }
                    ]}
                />
                <Table columns={tableColumns[dataChosen]} dataSource={datas[dataChosen]} bordered virtual scroll={{ x: 700, y: 500 }}></Table>
            </div>
        </>
    )
}

export default Main;