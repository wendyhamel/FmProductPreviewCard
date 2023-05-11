tailwind.config = {
	theme: {
		fontFamily: {
			'sans': ['Montserrat', 'sans-serif'],
			'serif': ['Fraunces', 'serif']
		},
		extend: {
			colors: {
				'primary': {
					'cyan': 'hsl(158, 36%, 37%)',
					'cyan-dark': 'hsl(158, 36%, 22%)',
					'cream': 'hsl(30, 38%, 92%)',
				},
				'neutral': {
					'blue': 'hsl(212, 21%, 14%)',
					'gray-blue': 'hsl(228, 12%, 48%)',
					'white': 'hsl(0, 0%, 100%)',
				}
			}
		}
	}
}