import { db } from '../database/db.js';

// export const getMembers = (req, res) => {
//   db.query('SELECT * FROM costs ORDER BY id DESC', (err, result) => {
//     if (err) {
//       res.status(500).json({ error: 'Internal server error' });
//       return;
//     }
//     res.send(result);
//   });
// };

// export const addMembers = (req, res) => {
//   const { name } = req.body;

//   const q = 'INSERT INTO costs (name, balance) VALUES (?,?)';

//   db.query(q, [name, 0], (err, result) => {
//     if (err) {
//       res.status(500).json({ err });
//       return;
//     }

//     res.status(200).json({ msg: 'Success' });
//   });
// };

// export const updateMember = (req, res) => {
//   const { id, name, balance } = req.body;

//   const q = 'UPDATE costs SET name = ? , balance= ? WHERE id = ?';

//   db.query(q, [name, balance, id], (err, result) => {
//     if (err) {
//       res.status(500).json({ err });
//       return;
//     }

//     res.status(200).json({ msg: 'Success' });
//   });
// };

// export const updateBalance = (req, res) => {
//   const { id, balance } = req.body;

//   const q = 'UPDATE costs SET balance= ? WHERE id = ?';

//   db.query(q, [balance, id], (err, result) => {
//     if (err) {
//       res.status(500).json({ err });
//       return;
//     }

//     res.status(200).json({ msg: 'Success' });
//   });
// };
