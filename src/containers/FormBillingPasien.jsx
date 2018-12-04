import React from 'react';

export const FormBillingPasien = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <h2>Tambah Billing Pasien</h2>
            <input type="hidden" name="id" value={props.billing.pasien.id} />
            <div className="form-group">
                <label>Nama Pasien<span style={{ color: 'red' }}>*</span></label>
                <input type="text" className="form-control" name="nama" defaultValue={props.billing.pasien.nama} readOnly/>
            </div>
            <div className="form-group">
                <label>Tanggal Tagihan</label>
                <input type="date" className="form-control" name="tanggalTagihan"/>
            </div>
            <div className="form-group">
                <label>Jumlah Tagihan</label>
                <input type="number" className="form-control" name="jumlahTagihan"/>
            </div>
            <button className="btn btn-success" value="submit">Tagihkan</button>
        </form>
    )
}