export function showToast(message, type = 'info') {
    Swal.fire({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      icon: type,
      title: message
    });
  }
  