import { connect } from 'react-redux'
import { setVisibilityFilter } from './filterSlice'
import Link from './Link'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = {
  setVisibilityFilter
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
