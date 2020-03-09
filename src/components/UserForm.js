import React, { Component } from 'react';
import nextButton from '../assets/buttons/btn-next.png';
import page from '../assets/page-1.png';

export class UserForm extends Component {
	continue = e => {
		e.preventDefault();
		const { values } = this.props;

		if (values.firstName !== '' && values.lastName !== '') {
			this.props.nextStep();
		}
	};

	render() {
		const { values, handleChange } = this.props;
		return (
			<>
				<div className='page-number'>
					<img src={page} alt='page-number' />
				</div>
				<div className='container'>
					<div className='form-area'>
						<h2>Mis Datos</h2>
						<p>
							Revisa los datos y completa aquellos pendientes antes de continuar
							con el proceso.
						</p>
						<br />
						<form>
							<label>
								Nombre
								<input
									type='text'
									id='firstName'
									name='firstName'
									onChange={handleChange('firstName')}
									defaultValue={values.firstName}
									autoFocus={true}
									required
								/>
							</label>
							<label>
								Apellidos
								<input
									type='text'
									id='lastName'
									name='lastName'
									onChange={handleChange('lastName')}
									defaultValue={values.lastName}
									required
								/>
							</label>
						</form>
					</div>

					<div className='btn-continue' onClick={this.continue}>
						<img src={nextButton} alt='pay-button' />
					</div>
				</div>
			</>
		);
	}
}

export default UserForm;
