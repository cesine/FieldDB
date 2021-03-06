import * as ActionType from './actions'
import userMaskDetail from './reducer'

describe('Reducer::Usermask', function () {
  it('returns an empty array as default state', function () {
    let action = {
      type: 'unknown'
    }
    let newState = userMaskDetail(undefined, action)
    expect(newState.toJS()).to.deep.equal({})
  })

  describe('on LOADED_USER_MASK', function () {
    it('should only publish valid usermasks', function () {
      let action = {
        type: ActionType.LOADED_USER_MASK,
        response: {
          responseKey: 'responseVal'
        }
      }
      let newState = userMaskDetail(undefined, action)
      expect(newState.toJS()).to.deep.equal({})
    })

    it('should publish the `response`', function () {
      let action = {
        type: ActionType.LOADED_USER_MASK,
        response: {
          username: 'lingllama'
        }
      }
      let newState = userMaskDetail(undefined, action)
      expect(newState.toJS()).to.deep.equal(action.response)
    })
  })
})
