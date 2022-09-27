var form = document.getElementById('form-regis');

        form.addEventListener("submit", function(e){
            e.preventDefault()
            var nama = document.getElementById('name').value;
            var asal = document.getElementById('kota').value;
            var alamat = document.getElementById('alamat').value;
            var kode_pos = document.getElementById('kode-pos').value;
            var provinsi = document.getElementById('provinsi').value;
            var telp = document.getElementById('nomor-telp').value;
            var email = document.getElementById('email').value;
            var nama_company = document.getElementById('nama-company').value;
            var alamat_company = document.getElementById('alamat-company').value;
            var nama_cp = document.getElementById('nama-cp').value;
            var nomor_cp = document.getElementById('nomor-cp').value;
            var email_company = document.getElementById('email-company').value;
            var file_verif = document.getElementById('img').value;

            if(nama == ''){
                alert("Tolong isi nama anda");
            }
            else if(asal == ''){
                alert("Tolong isi asal anda");
            }
            else if(alamat == ''){
                alert('Tolong isi alamat anda');
            }
            else if(kode_pos == ''){
                alert('Tolong isi kode pos anda');
            }
            else if(provinsi == ''){
                alert('Tolong isi provinsi anda');
            }
            else if(telp == ''){
                alert('Tolong isi nomor telpon anda');
            }
            else if(email == ''){
                alert('Tolong isi email anda');
            }
            else if(nama_company == ''){
                alert('Tolong isi nama perusahaan anda');
            }
            else if(nama_cp == ''){
                alert('Tolong isi nama kontak personal anda');
            }
            else if(nomor_cp == ''){
                alert('Tolong isi nomor kontak personal anda');
            }
            else if(email_company == ''){
                alert('Tolong isi email perusahaan anda');
            }
            else if(alamat_company == ''){
                alert('Tolong isi alamat perusahaan anda');
            }
        })