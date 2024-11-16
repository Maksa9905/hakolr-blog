import styles from './IconButton.module.css'

export interface ButtonIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode,
}

export const IconButton = ({ children, ...props }: ButtonIconProps) => {
    return (
        <button {...props} className={styles.button}>
            {children}
        </button>
    );
};