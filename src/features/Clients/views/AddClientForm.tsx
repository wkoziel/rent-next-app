import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';

type AddClientFormProps = {
  open: boolean;
  onClose: () => void;
};

export const AddClientForm = ({ open, onClose }: AddClientFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data: any) => {
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add User Data</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <TextField
            label="First Name"
            {...register('firstname', { required: true })}
            error={!!errors.firstname}
            helperText={errors.firstname ? 'First name is required' : ''}
          />
          <TextField
            label="Last Name"
            {...register('lastname', { required: true })}
            error={!!errors.lastname}
            helperText={errors.lastname ? 'Last name is required' : ''}
          />
          {/* Add more form fields as needed */}
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button type="submit" form="addUserDataForm" color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};
