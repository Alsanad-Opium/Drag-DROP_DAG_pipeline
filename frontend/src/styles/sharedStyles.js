export const sharedStyles = {
  node: {
    base: {
      padding: '12px',
      borderRadius: '8px',
      backgroundColor: 'var(--node-background)',
      border: '1px solid var(--node-border)',
      minWidth: '250px',
      minHeight: '100px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      transition: 'all 0.3s ease',
      '&:hover': {
        boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
      },
    },
    title: {
      fontSize: '14px',
      fontWeight: 'bold',
      marginBottom: '12px',
      color: 'var(--text)',
      borderBottom: '1px solid var(--node-border)',
      paddingBottom: '8px',
    },
    input: {
      width: '100%',
      padding: '6px 8px',
      marginTop: '4px',
      border: '1px solid var(--node-border)',
      borderRadius: '4px',
      fontSize: '13px',
      backgroundColor: 'var(--node-background)',
      color: 'var(--text)',
      transition: 'all 0.3s ease',
      '&:focus': {
        outline: 'none',
        borderColor: 'var(--edge-color)',
        boxShadow: '0 0 0 2px rgba(0,0,0,0.1)',
      },
    },
    select: {
      width: '100%',
      padding: '6px 8px',
      marginTop: '4px',
      border: '1px solid var(--node-border)',
      borderRadius: '4px',
      fontSize: '13px',
      backgroundColor: 'var(--node-background)',
      color: 'var(--text)',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      '&:focus': {
        outline: 'none',
        borderColor: 'var(--edge-color)',
        boxShadow: '0 0 0 2px rgba(0,0,0,0.1)',
      },
    },
    label: {
      fontSize: '12px',
      color: 'var(--text)',
      opacity: 0.8,
      marginBottom: '4px',
      display: 'block',
    },
  },
  toolbar: {
    base: {
      padding: '12px',
      backgroundColor: 'var(--toolbar-background)',
      borderBottom: '1px solid var(--toolbar-border)',
      display: 'flex',
      gap: '8px',
      transition: 'all 0.3s ease',
    },
    button: {
      padding: '6px 12px',
      backgroundColor: 'var(--node-background)',
      border: '1px solid var(--node-border)',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '13px',
      color: 'var(--text)',
      transition: 'all 0.3s ease',
      '&:hover': {
        backgroundColor: 'var(--edge-color)',
        color: 'var(--background)',
      },
    },
  },
  alert: {
    base: {
      padding: '12px 16px',
      borderRadius: '4px',
      marginBottom: '16px',
      fontSize: '14px',
      transition: 'all 0.3s ease',
    },
    success: {
      backgroundColor: 'rgba(40, 167, 69, 0.1)',
      border: '1px solid rgba(40, 167, 69, 0.2)',
      color: 'var(--text)',
    },
    error: {
      backgroundColor: 'rgba(220, 53, 69, 0.1)',
      border: '1px solid rgba(220, 53, 69, 0.2)',
      color: 'var(--text)',
    },
    info: {
      backgroundColor: 'rgba(23, 162, 184, 0.1)',
      border: '1px solid rgba(23, 162, 184, 0.2)',
      color: 'var(--text)',
    },
  },
}; 