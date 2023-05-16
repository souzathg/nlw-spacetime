const styles = {
  color: '#F00',
}

interface ButtonProperties {
  // Como se fosse uma interface Java que define o contrato da classe
  title: string
}

export function Button(properties: ButtonProperties) {
  return <p style={styles}>{properties.title}</p>
}
