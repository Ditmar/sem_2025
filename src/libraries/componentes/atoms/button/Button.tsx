import type { ButtonProps } from './Button.props';
import classNames from 'classnames';
import styles from './button.module.css';

export function Button (props: ButtonProps) {
    const { children, sizes, variant, onClick } = props;
    const classProps = classNames(styles['button'], styles[sizes], styles[variant]);
    return (
        <button className={classProps} onClick={onClick}>
            { children }
        </button>
    )
}